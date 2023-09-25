import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import qrcode from 'qrcode';
import { useEffect, useState } from 'react';
import styles from './qrcode.module.css';

const TEST_URL = 'http://localhost:3000/?program=';

const QrCode: NextPage = () => {
  const [qrCodeData, setQrCodeData] = useState<string>('');
  const [qrCodeText, setQrCodeText] = useState<string>('');

  const router = useRouter();
  const program = router.query.program as string;

  useEffect(() => {
    setQrCodeText(TEST_URL + program);
  }, [program]);

  useEffect(() => {
    qrcode.toDataURL(qrCodeText, (err, url) => {
      setQrCodeData(url);
    });
  }, [qrCodeText]);

  return (
    <>
      <img className={styles.qrCodeImg} src={qrCodeData} alt="QRCode-image" />
    </>
  );
};

export default QrCode;
