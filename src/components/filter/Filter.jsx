import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filter, handleInput }) => {
  return (
    <div>
      <p>Find contacts by name:</p>
      <input
        name="filter"
        type="text"
        className="form-control"
        onChange={handleInput}
        value={filter}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
};

export default Filter;
