import React from 'react';
import MiceList from '../mice/MiceList';
import { useMiceList } from '../../hooks/useMiceList';
import MouseForm from '../mice/MouseForm';

export default function App() {
  const { mice } = useMiceList();

  return (
    <>
      <MouseForm />
      <MiceList mice={mice} />
    </>
  );
}
