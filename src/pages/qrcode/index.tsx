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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:8080/api/user', { method: 'GET' });

  //       if (!response.ok) {
  //         console.error('Error fetching the program', response.status);
  //         return;
  //       }

  //       const data = await response.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.error('Error fetching the program', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <p>{program} QRコード</p>
      <img className={styles.qrCodeImg} src={qrCodeData} alt="QRCode-image" />
    </>
  );
};

export default QrCode;
