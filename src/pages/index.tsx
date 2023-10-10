import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Camera } from './@components/camera/camera';
import { Register } from './@components/register/register';

const Home = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const router = useRouter();
  const query = router.query.program;

  useEffect(() => {
    const cookies = document.cookie.split(';');
    const uid = cookies.find((v) => v.includes('uid='));
    if (uid !== undefined) {
      setIsRegistered(true);
    } else {
      if (query !== undefined) {
        router.push('/');
      }
    }
  }, [query, router]);

  if (!isRegistered) return <Register />;

  return query === undefined ? <Camera /> : <div />;
};

export default Home;
