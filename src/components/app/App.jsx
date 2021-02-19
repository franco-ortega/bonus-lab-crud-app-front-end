import React from 'react';
import MiceList from '../mice/MiceList';
import MouseForm from '../mice/MouseForm';
import { useMouseForm } from '../../hooks/useMouseForm';
import styles from './App.css';

export default function App() {
  const {
    onNameChange, 
    onFurChange,
    onTailChange,
    onIdUpdateChange,
    onNameUpdateChange,
    onFurUpdateChange,
    onTailUpdateChange,
    onIdDeleteChange,
    onMethodChange,
    onFormSubmit,
    mice,
    loading
  } = useMouseForm();
  
  return (
    <div className={styles.App}>
      <MouseForm
        onNameChange={onNameChange}
        onFurChange={onFurChange}
        onTailChange={onTailChange}
        onIdUpdateChange={onIdUpdateChange}
        onNameUpdateChange={onNameUpdateChange}
        onFurUpdateChange={onFurUpdateChange}
        onTailUpdateChange={onTailUpdateChange}
        onIdDeleteChange={onIdDeleteChange}
        onMethodChange={onMethodChange}
        onFormSubmit={onFormSubmit}
      />
      <MiceList
        mice={mice}
        loading={loading}
      />
    </div>
  );
}
