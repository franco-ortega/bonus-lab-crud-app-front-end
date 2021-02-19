import React from 'react';
import PropTypes from 'prop-types';
import styles from './MouseForm.css';

export default function MouseForm({
  onNameChange,
  onFurChange,
  onTailChange,
  onIdUpdateChange,
  onNameUpdateChange,
  onFurUpdateChange,
  onTailUpdateChange,
  onIdDeleteChange,
  onMethodChange,
  onFormSubmit
}) {

  return (
    <div className={styles.MouseForm}>
      Mouse Form!
      <form onSubmit={onFormSubmit}>
        <p>
          <label htmlFor="post">
          Post: <input
              id="post"
              type="radio"
              name="method"
              value="POST"
              onChange={onMethodChange}
            /><br />
          Name: <input
              id="post" 
              type="text"
              onChange={onNameChange}
            />
          Fur Color: <input
              id="post"
              type="text"
              onChange={onFurChange}
            />
          Tail Length: <input
              id="post"
              type="number"
              onChange={onTailChange}
            />
          </label>
        </p>

        <p>
          <label htmlFor="get">
          Get: <input
              id="get"
              type="radio"
              name="method"
              value="GET"
              onChange={onMethodChange}
            />
          </label>
        </p>

        <p>
          <label htmlFor="put">
          Update: <input
              id="put"
              type="radio"
              name="method"
              value="PUT"
              onChange={onMethodChange}
            /><br />
          ID: <input id="put" type="number"
              onChange={onIdUpdateChange}
            />
          Name: <input id="put" type="text"
              onChange={onNameUpdateChange}
            />
          Fur Color: <input id="put" type="text"
              onChange={onFurUpdateChange}
            />
          Tail Length: <input id="put" type="number"
              onChange={onTailUpdateChange}
            />
          </label>
        </p>

        <p>
          <label htmlFor="delete">
          Delete: <input
              id="delete"
              type="radio"
              name="method"
              value="DELETE"
              onChange={onMethodChange}
            />
          ID: <input id="delete" type="number"
              onChange={onIdDeleteChange}
            />
          </label>
        </p>
        <button>Submit</button>
      </form>
    </div>
  );
}

MouseForm.propTypes = {
  onNameChange: PropTypes.func.isRequired,
  onFurChange: PropTypes.func.isRequired,
  onTailChange: PropTypes.func.isRequired,
  onIdUpdateChange: PropTypes.func.isRequired,
  onNameUpdateChange: PropTypes.func.isRequired,
  onFurUpdateChange: PropTypes.func.isRequired,
  onTailUpdateChange: PropTypes.func.isRequired,
  onIdDeleteChange: PropTypes.func.isRequired,
  onMethodChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired
};
