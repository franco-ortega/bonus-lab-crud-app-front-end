import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../loading/Loading';

export default function MiceList({ mice, loading }) {

  const miceElements = mice.map(mouse => (
    <li key={mouse.id}>
      <p>
        ID: {mouse.id} -
        - Name: {mouse.name} -
        - Fur Color: {mouse.furColor} -
        - Tail Length: {mouse.tailLength} inches
      </p>
    </li>
  ));

  if(loading) return <Loading />;
  return (
    <ul data-testid="mice">
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
  })).isRequired,
  loading: PropTypes.bool.isRequired
};
