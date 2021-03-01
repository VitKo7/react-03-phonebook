import React from 'react';
import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, number, onRemove }) => {
  return (
    <>
      <span>
        {name}: {number}
      </span>

      <button
        data-id={id}
        onClick={onRemove}
        type="button"
        className=" btn btn-light btn-sm border-secondary "
      >
        Delete
      </button>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactListItem;
