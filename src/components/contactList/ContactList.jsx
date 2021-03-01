import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';

const ContactList = ({ contacts, onRemove }) => {
  return (
    <>
      <ul className="contactList">
        {contacts.map(contact => (
          <li className="contactListItem" key={contact.id}>
            <ContactListItem {...contact} onRemove={onRemove} />
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactList;
