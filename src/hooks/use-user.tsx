import {
  type ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react';

import { api } from '../services/api';

export type UserData = {
  id: string;
  name: string;
  avatarUrl: string;
  token: string;
};

type UserContextProps = {
  getUserInfo: (githubCode: string) => Promise<void>;
  userData: UserData;
};

type UserProviderProps = {
  children: ReactNode;
};

// adicionando o export
// apertando o f2 e trocando o nome em todos os lugares
export const userLocalStorageKey = `${import.meta.env.VITE_LOCALSTORAGE_KEY}: UserData`;

const UserContext = createContext<UserContextProps>({} as UserContextProps);

export function UserProvider({ children }: UserProviderProps) {
  const [userData, setUserData] = useState<UserData>({} as UserData);

  function putUserData(data: UserData) {
    setUserData(data);

    localStorage.setItem(userLocalStorageKey, JSON.stringify(data));
  }

  async function getUserInfo(githubCode: string) {
    const { data } = await api.get<UserData>('/auth/callback', {
      params: {
        code: githubCode,
      },
    });

    putUserData(data);
  }

  async function loadUserData() {
    const localData = localStorage.getItem(userLocalStorageKey);

    if (localData) {
      setUserData(JSON.parse(localData) as UserData);
    }
  }

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <UserContext.Provider value={{ userData, getUserInfo }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used with UserContext.');
  }

  return context;
}
