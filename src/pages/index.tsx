import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { apiClient } from '../utils/apiClient';
import { Camera } from './@components/camera/camera';
import { Register } from './@components/register/register';

const Home = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const router = useRouter();
  const query = router.query.program;

  useEffect(() => {
    const fetch = async () => {
      return await apiClient.user.$get();
    };
    (async () => {
      try {
        await fetch();
        setIsRegistered(true);
      } catch {
        setIsRegistered(false);
      }
    })();
  }, [query, router]);

  if (!isRegistered) return <Register />;

  return query === undefined ? <Camera /> : <div />;
};

export default Home;
