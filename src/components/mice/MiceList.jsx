import React from 'react';
import PropTypes from 'prop-types';
import MouseDetails from './MouseDetails';

export default function MiceList({ mice }) {
  // console.log(mice);

  const miceElements = mice.map(mouse => (
    <li key={mouse.id}>
      <p>
        {mouse.name}
      </p>
      <p>
        {mouse.furColor}
      </p>
      <p>
        {mouse.tailLength}
      </p>
    </li>
  ));
  return (
    <ul>
      A list of mice:
      {/* <MouseDetails /> */}
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
