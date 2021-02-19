import React from 'react';
import PropTypes from 'prop-types';

export default function MouseDetails({ id, name, furColor, tailLength }) {
  return (
    <div>
      <p>
        ID: {id}<br />
        - Name: {name}<br />
        - Fur Color: {furColor}<br />
        - Tail Length: {tailLength} inches
      </p>
            
    </div>
  );
}

MouseDetails.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  furColor: PropTypes.string.isRequired,
  tailLength: PropTypes.number.isRequired
};
  
