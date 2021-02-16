import { useEffect, useState } from 'react';
import { getMice } from '../services/mouseRequest';

export const useMiceList = () => {
  const [mice, setMice] = useState([]);

  useEffect(async() => {
    return getMice()
      .then(mice => setMice(mice));
  }, []);
  
  console.log('Mice (GET response):');
  console.log(mice);

  return {
    mice
  };
};
