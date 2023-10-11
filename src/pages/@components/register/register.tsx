import type { ChangeEvent } from 'react';
import { useMemo, useState } from 'react';
import type { UserRequest } from '../../../api/@types';
import { Input } from '../../../components/ui/Input/Input';
import { Select } from '../../../components/ui/Select/Select';
import { apiClient } from '../../../utils/apiClient';
import styles from './register.module.css';

const options = {
  age: ['10代', '20代', '30代', '40代', '50代', '60代以上'],
  gender: ['男性', '女性', 'その他', '回答しない'],
  occupation: ['学生', '会社員', '自営業', '主婦', 'その他'],
  home: ['地元', 'その他'],
  composition: [
    '一人',
    '家族(子どもあり)',
    '家族(子どもなし)',
    '学生グループ',
    '恋人',
    '友人',
    'その他',
  ],
};

type FormData = {
  age?: 0 | 1 | 2 | 3 | 4 | 5;
  gender?: 0 | 1 | 2 | 3;
  occupation?: 0 | 1 | 2 | 3 | 4;
  home?: 0 | 1;
  people?: number;
  composition?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
};

const isDefined = <T,>(v: T | undefined): v is T => v !== undefined;

export const Register = () => {
  const [data, setData] = useState<FormData>({});

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    const isNumber = !isNaN(Number(value)) || value === '';
    if (!isNumber) return;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isDisabled = useMemo(() => {
    const isNegative = (v: number) => v <= 0;
    const isEmpty = Object.values(data).some((v) => v === undefined);
    return isEmpty || isNegative(data.people ?? -1);
  }, [data]);

  const handleSubmit = () => {
    const isEmpty = Object.values(data).some((v) => !isDefined(v));
    if (isEmpty) return;

    const definedData = Object.fromEntries(
      Object.entries(data).filter(([_, v]) => [_, isDefined(v)])
    ) as UserRequest;

    apiClient.api.user.$post({ body: definedData });
  };

  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles.title}>赤羽台祭へようこそ</h1>
      </header>
      <main>
        <Select
          label="年齢"
          name="age"
          options={options.age}
          checkedIndex={data.age ?? null}
          onChange={handleSelectChange}
        />
        <Select
          label="性別"
          name="gender"
          options={options.gender}
          checkedIndex={data.gender ?? null}
          onChange={handleSelectChange}
        />
        <Select
          label="職業"
          name="occupation"
          options={options.occupation}
          checkedIndex={data.occupation ?? null}
          onChange={handleSelectChange}
        />
        <Select
          label="出身"
          name="home"
          options={options.home}
          checkedIndex={data.home ?? null}
          onChange={handleSelectChange}
        />
        <Input label="人数" name="people" value={data.people ?? 0} onChange={handleInputChange} />
        <Select
          label="グループ構成"
          name="composition"
          options={options.composition}
          checkedIndex={data.composition ?? null}
          onChange={handleSelectChange}
        />
      </main>
      <button disabled={isDisabled} onClick={handleSubmit} className={styles.button}>
        送信
      </button>
    </div>
  );
};
