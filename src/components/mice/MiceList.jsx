import React from 'react';
import PropTypes from 'prop-types';
import MouseDetails from './MouseDetails';
import { useMiceList } from '../../hooks/useMiceList';
import { useMouseForm } from '../../hooks/useMouseForm';

export default function MiceList({ mice, response }) {
  // const { mice } = useMiceList();
  // const { response } = useMouseForm();
  // console.log(mice);

  const miceElements = mice.map(mouse => (
    <li key={mouse.id}>
      <p>
        {mouse.id} - {mouse.name} - {mouse.furColor} - {mouse.tailLength}
      </p>
    </li>
  ));
  return (
    <ul>
      A list of mice:
      {/* <MouseDetails /> */}
      {miceElements}
      Response: {response}
    </ul>
  );
}

MiceList.propTypes = {
  mice: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    furColor: PropTypes.string.isRequired,
    tailLength: PropTypes.number.isRequired,
  })).isRequired,
  response: PropTypes.array
};
