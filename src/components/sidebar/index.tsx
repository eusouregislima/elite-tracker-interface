import { ListChecks, SignOut } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

export function Sidebar() {
  return (
    <div className={styles.container}>
      <img src="https://github.com/eusouregislima.png" alt="Regis Lima" />
      <div className={styles.links}>
        <Link to="/">
          <ListChecks />
        </Link>
      </div>
      <SignOut className={styles.signout} />
    </div>
  );
}
