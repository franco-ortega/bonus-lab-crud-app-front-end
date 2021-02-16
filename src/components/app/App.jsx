import React, { useEffect, useState } from 'react';
import { getMice } from '../../services/mouseRequest';
import MiceList from '../../containers/MiceList';

export default function App() {
  const [mice, setMice] = useState([]);

  useEffect(async() => {
    return getMice()
      .then(mice => setMice(mice));
  }, []);
  
  console.log('Mice (GET response):');
  console.log(mice);


  return (
    <MiceList mice={mice} />
  );
}
