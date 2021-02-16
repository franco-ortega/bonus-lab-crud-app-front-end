import React from 'react';
import MiceList from '../../containers/MiceList';
import { useMiceList } from '../hooks/useMiceList';

export default function App() {
  const { mice } = useMiceList();

  return (
    <MiceList mice={mice} />
  );
}
