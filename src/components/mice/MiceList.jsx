import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../loading/Loading';
import MouseDetails from './MouseDetails';

export default function MiceList({ mice, loading }) {

  const miceElements = mice.map(mouse => (
    <li key={mouse.id}>
      <MouseDetails {...mouse} />
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
