import { useState } from 'react';
import { getMice, mouseRequest } from '../services/mouseRequest';

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
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    const data = { name, furColor: fur, tailLength: tail };
    const dataUpdate = {
      name: nameUpdate,
      furColor: furUpdate,
      tailLength: tailUpdate
    };

    mouseRequest(method, data, dataUpdate, id, idDelete)
      .then(response => {
        setResponse(response);
        getMice()
          .then(mice => setMice(mice));
        setLoading(false);
      });
  };

  return {
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
    response,
    loading
  };
};
