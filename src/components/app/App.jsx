import React, { useState } from 'react';
import MiceList from '../mice/MiceList';
import MouseForm from '../mice/MouseForm';
import { useMouseForm } from '../../hooks/useMouseForm';
import styles from './App.css';

export default function App() {
  const [response, setResponse] = useState([]);
  
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
    mice
  } = useMouseForm();
  
  return (
    <div className={styles.App}>
      <MouseForm
        // name={name}
        // method={method}
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
        response={response}
        setResponse={setResponse}
      />
      <MiceList
        mice={mice}
        response={response}
        setResponse={setResponse}
      />
    </div>
  );
}
