import React from 'react';
import PropTypes from 'prop-types';

export default function MiceList({ mice }) {

  const miceElements = mice.map(mouse => (
    <li key={mouse.id}>
      <p>
        {mouse.id} - {mouse.name} - {mouse.furColor} - {mouse.tailLength}
      </p>
    </li>
  ));
  return (
    <ul>
      {miceElements}
    </ul>
  );
}

MiceList.propTypes = {
  mice: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    furColor: PropTypes.string.isRequired,
    tailLength: PropTypes.number.isRequired,
  })).isRequired
};
