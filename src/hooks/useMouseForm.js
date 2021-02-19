import { useEffect, useState } from 'react';
import { getMice, mouseRequest } from '../services/mouseRequest';
// import { useMiceList } from './useMiceList';

export const useMouseForm = () => {
  const [method, setMethod] = useState('');
  const [name, setName] = useState('');
  const [fur, setFur] = useState('');
  const [tail, setTail] = useState('');
  const [id, setId] = useState('');
  const [nameUpdate, setNameUpdate] = useState('');
  const [furUpdate, setFurUpdate] = useState('');
  const [tailUpdate, setTailUpdate] = useState('');
  const [idDelete, setIdDelete] = useState('');
  const [mice, setMice] = useState([]);
  const [response, setResponse] = useState([]);

  const onNameChange = ({ target }) => {
    setName(target.value);
  };

  const onFurChange = ({ target }) => {
    setFur(target.value);
  };

  const onTailChange = ({ target }) => {
    setTail(target.value);
  };

  const onIdUpdateChange = ({ target }) => {
    setId(target.value);
  };

  const onNameUpdateChange = ({ target }) => {
    setNameUpdate(target.value);
  };

  const onFurUpdateChange = ({ target }) => {
    setFurUpdate(target.value);
  };

  const onTailUpdateChange = ({ target }) => {
    setTailUpdate(target.value);
  };

  const onIdDeleteChange = ({ target }) => {
    setIdDelete(target.value);
  };

  const onMethodChange = ({ target }) => {
    setMethod(target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('METHOD ' + method);
    // console.log('POST: ' + name, fur, tail);
    // console.log('PUT: ' + id, nameUpdate, furUpdate, tailUpdate);
    // console.log('DELETE: ' + idDelete);
    // console.log(mice);

    const data = { id: idDelete, name, furColor: fur, tailLength: tail };

    mouseRequest(method, data, id, idDelete)
      .then(response => {
        // console.log(response);
        setResponse(response);
        getMice()
          .then(mice => setMice(mice));
        // setMice(response);
        
      });
  };
  // console.log('MICE:', mice);
  
  // console.log('RESPONSE:');
  // console.log(response);

  // useEffect(() => {
  //   return getMice()
  //     .then(mice => setMice(mice));
  // }, []);
  
  // console.log(mice);
  

  return {
    // name,
    // method,
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
  };
};
