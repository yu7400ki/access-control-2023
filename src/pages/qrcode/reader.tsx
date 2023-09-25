import { useEffect, useState } from 'react';
import QrReader from '../../components/QrReader';
import styles from './qrcode.module.css';

// type ApiResponse = {
//   tmp: boolean;
// };

const QrReaderPage = () => {
  // const router = useRouter();
  // const org = router.query.org as string;
  const [result, setResult] = useState<string>('');
  const [showPopup, setShowPopup] = useState<boolean>(false);

  // const data = useMemo(() => {
  //   if (result && org) {
  //     return { org, qrData: result };
  //   }
  //   return null;
  // }, [result, org]);

  useEffect(() => {
    // const postData = async () => {
    //   if (process.env.NEXT_PUBLIC_SERVER_URL)
    //     await fetch(process.env.NEXT_PUBLIC_SERVER_URL, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: `${JSON.stringify(data)}`,
    //     })
    //       .then(async (response) => {
    //         const responseData: ApiResponse = await response.json();
    //       })
    //       .catch(() => {
    //         // エラーハンドリング
    //       });
    // };

    const showThankYouPopup = () => {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 1700);
    };

    if (result !== '') {
      // postData();
      showThankYouPopup();
    }
  }, [result]);

  return (
    <div className={styles.container}>
      {showPopup && <div className={styles.popup}>読み込みありがとうございます!!</div>}
      <div className={styles.cameraContainer}>
        <QrReader setResult={setResult} onRequestClose={() => null} />
      </div>
      <p>{result}</p>
    </div>
  );
};

export default QrReaderPage;
