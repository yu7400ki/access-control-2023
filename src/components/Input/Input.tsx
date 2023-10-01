import type { ChangeEvent } from 'react';
import styles from './Input.module.css';

type Props = {
  label: string | null;
  name: string;
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: Props) => {
  return (
    <div className={styles.container}>
      {props.label !== null && (
        <label htmlFor={props.name} className={styles.test}>
          {props.label}
        </label>
      )}
      <input
        type="text"
        name={props.name}
        id={props.name}
        value={props.value}
        onChange={props.onChange}
        className={styles.input}
      />
    </div>
  );
};
