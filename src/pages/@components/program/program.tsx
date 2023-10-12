import Link from 'next/link';

export const Program = (programId: string) => {
  return (
    <div>
      <h1>{programId}へようこそ</h1> {/* 企画名にすべき */}
      <Link href="/">カメラ画面に戻る</Link>
    </div>
  );
};
