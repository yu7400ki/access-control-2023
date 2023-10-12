import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import QrReader from '../../components/QrReader/QrReader';
import styles from './qrcode.module.css';

const QrReaderPage = () => {
  const router = useRouter();
  const [qrData, setQrData] = useState<string>('');

  useEffect(() => {
    if (qrData.length !== 0) {
      router.push(qrData);
    }
  }, [qrData, router]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>行動把握システム</h2>
      <div className={styles.cameraContainer}>
        <div className={styles.overlay} />
        <QrReader setResult={setQrData} onRequestClose={() => null} />
      </div>
      <p className={styles.text}>学内にあるQRコードをスキャンしよう！</p>

      <a href="https://akabanedai-fes.com/02/" className={styles.site}>
        <img src="/logo.png" className={styles.logoImg} />
        <br />
        赤羽台祭公式サイトはこちら
      </a>
    </div>
  );
};

export default QrReaderPage;
