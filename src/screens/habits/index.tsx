import { PaperPlaneRight, Trash } from '@phosphor-icons/react';
import { useRef } from 'react';

import { Sidebar } from '../../components/sidebar';
import { api } from '../../services/api';
import styles from './styles.module.css';

export function Habits() {
  const nameInput = useRef<HTMLInputElement>(null);

  async function handleSubmit() {
    const name = nameInput.current?.value;

    if (name) {
      await api.post('/habits', {
        name,
      });

      nameInput.current.value = '';
    }
  }

  return (
    <div className={styles.app}>
      <Sidebar />

      <div className={styles.container}>
        <div className={styles.content}>
          <header>
            <h1>Hábitos diários</h1>
            <span>
              {`Hoje,  ${new Intl.DateTimeFormat('pt-BR', {
                dateStyle: 'long',
                timeZone: 'America/Sao_Paulo',
              }).format(new Date())}`}
            </span>
          </header>
          <div className={styles.input}>
            <input
              ref={nameInput}
              placeholder="Digite aqui um novo hábito"
              type="text"
            />
            <PaperPlaneRight onClick={handleSubmit} />
          </div>
          <div className={styles.habits}>
            {Array(6)
              .fill(1)
              .map((_, index) => (
                <div key={index} className={styles.habit}>
                  <p>Hábito {index + 1}</p>
                  <div>
                    <input type="checkbox" name="" id="" />
                    <Trash />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
