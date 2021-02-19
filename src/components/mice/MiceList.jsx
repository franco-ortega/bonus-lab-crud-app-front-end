import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../loading/Loading';

export default function MiceList({ mice, loading }) {

  const miceElements = mice.map(mouse => (
    <li key={mouse.id}>
      <p>
        {mouse.id} - {mouse.name} - {mouse.furColor} - {mouse.tailLength}
      </p>
    </li>
  ));

  if(loading) return <Loading />;
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
  })).isRequired,
  loading: PropTypes.bool.isRequired
};
