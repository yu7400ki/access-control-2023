import type { ChangeEvent } from 'react';
import styles from './Select.module.css';

type Props = {
  label: string | null;
  name: string;
  options: string[];
  checkedIndex: number | null;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

export const Select = (props: Props) => {
  return (
    <div className={styles.container}>
      {props.label !== null && <label htmlFor={props.name}>{props.label}</label>}
      <select name={props.name} id={props.name} onChange={props.onChange}>
        <option value="" hidden selected={props.checkedIndex === null}>
          選択してください
        </option>
        {props.options.map((option, i) => (
          <option value={i} key={option} selected={props.checkedIndex === i}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
