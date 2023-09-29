import type { ChangeEvent } from 'react';
import { useMemo, useState } from 'react';
import { Input } from '../components/Input/Input';
import { Select } from '../components/Select/Select';
import styles from './index.module.css';

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
  age?: number;
  gender?: number;
  occupation?: number;
  home?: number;
  number?: number;
  composition?: number;
};

const Home = () => {
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

  const handleSubmit = () => {
    //
  };

  const isDisabled = useMemo(() => {
    const isNegative = (v: number) => v <= 0;
    const isEmpty = Object.values(data).some((v) => v === undefined);
    return isEmpty || isNegative(data.number ?? -1);
  }, [data]);

  return (
    <div className={styles.container}>
      <div>
        <h1>INIAD FES 入退構サービス</h1>
      </div>
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
        <Input label="人数" name="number" value={data.number ?? 0} onChange={handleInputChange} />
        <Select
          label="グループ構成"
          name="composition"
          options={options.composition}
          checkedIndex={data.composition ?? null}
          onChange={handleSelectChange}
        />
        <button disabled={isDisabled} onClick={handleSubmit}>
          送信
        </button>
      </main>
    </div>
  );
};

export default Home;
