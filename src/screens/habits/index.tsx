import { PaperPlaneRight, Trash } from '@phosphor-icons/react';

import { Sidebar } from '../../components/sidebar';
import styles from './styles.module.css';

export function Habits() {
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
            <input placeholder="Digite aqui um novo hábito" type="text" />
            <PaperPlaneRight />
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
