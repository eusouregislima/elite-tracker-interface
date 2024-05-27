import { Minus, Plus } from '@phosphor-icons/react';
import { useRef } from 'react';

import { Button } from '../../components/button';
import { Header } from '../../components/header';
import styles from './styles.module.css';

export function Focus() {
  const focusInput = useRef<HTMLInputElement>(null);
  const restInput = useRef<HTMLInputElement>(null);

  function handleAddMinutes(type: 'focus' | 'rest') {
    if (type === 'focus') {
      const currentValue = Number(focusInput.current?.value);

      if (focusInput.current) {
        focusInput.current.value = String(currentValue + 5);
      }

      return;
    }

    const currentValue = Number(restInput.current?.value);

    if (restInput.current) {
      restInput.current.value = String(currentValue + 5);
    }
  }
  function handleRemoveMinutes(type: 'focus' | 'rest') {
    if (type === 'focus') {
      const currentValue = Number(focusInput.current?.value);

      if (focusInput.current && focusInput.current.value > '0') {
        focusInput.current.value = String(currentValue - 5);
      }

      return;
    }

    const currentValue = Number(restInput.current?.value);

    if (restInput.current && restInput.current.value > '0') {
      restInput.current.value = String(currentValue - 5);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header title="Tempo de Foco" />
        <div className={styles['input-group']}>
          <div className={styles.input}>
            <Plus
              onClick={() => {
                handleAddMinutes('focus');
              }}
            />
            <input
              ref={focusInput}
              placeholder="Tempo de Foco"
              type="number"
              disabled
            />
            <Minus
              onClick={() => {
                handleRemoveMinutes('focus');
              }}
            />
          </div>
          <div className={styles.input}>
            <Plus
              onClick={() => {
                handleAddMinutes('rest');
              }}
            />
            <input
              ref={restInput}
              placeholder="Tempo de Descanso"
              type="number"
              disabled
            />
            <Minus
              onClick={() => {
                handleRemoveMinutes('rest');
              }}
            />
          </div>
        </div>
        <div className={styles.timer}>
          <span>25:00</span>
        </div>

        <div className={styles['button-group']}>
          <Button disabled>Começar</Button>
          <Button>Iniciar Descanso</Button>
          <Button>Retomar</Button>
          <Button variant="error">Cancelar</Button>
        </div>
      </div>
    </div>
  );
}
