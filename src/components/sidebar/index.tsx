import {
  ClockCounterClockwise,
  ListChecks,
  SignOut,
} from '@phosphor-icons/react';
import clsx from 'clsx';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useUser } from '../../hooks/use-user';
import styles from './styles.module.css';

export function Sidebar() {
  const { userData, logout } = useUser();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleLogout() {
    logout();

    navigate('/entrar');
  }

  return (
    <div className={styles.container}>
      <img src={userData.avatarUrl} alt={userData.name} />
      <div className={styles.links}>
        <Link to="/">
          <ListChecks className={clsx(pathname === '/' && styles.active)} />
        </Link>
        <Link to="/foco">
          <ClockCounterClockwise
            className={clsx(pathname === '/foco' && styles.active)}
          />
        </Link>
      </div>
      <SignOut onClick={handleLogout} className={styles.signout} />
    </div>
  );
}
