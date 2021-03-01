import React, { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import shortid from 'shortid';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';
import styles from './App.module.css';

export default class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  createContact = ({ name, number }) => {
    const entryCheck = this.state.contacts.find(
      contact => contact.name === name || contact.number === number,
    );

    if (entryCheck) {
      alert(`This name or number already exists`);
    } else if (name.length === 0 || number.length === 0) {
      alert(`Please, fill in all the fields`);
    } else {
      const contactNew = {
        // id: uuidv4(),
        // id: shortid.generate(),
        id: nanoid(),
        name,
        number,
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, { ...contactNew }],
      }));
    }
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  handleRemove = event => {
    const contactId = event.target.dataset.id;

    this.setState(prevState => {
      const contacts = prevState.contacts.filter(item => item.id !== contactId);
      return {
        contacts,
      };
    });
  };

  componentDidMount() {
    // console.log('componentDidMount');

    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    // console.log(parsedContacts);
    if (parsedContacts) {
      this.setState({ contacts: [...parsedContacts] });
    }
  }

  componentDidUpdate(_, prevState) {
    // console.log('componentDidUpdate');

    if (this.state.contacts !== prevState.contacts) {
      // console.log('обновился массив - contacts');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  // ---------------------------MARKUP---------------------------------

  render() {
    const { filter } = this.state;
    const contacts = this.getFilteredContacts();

    return (
      <div className={styles.container}>
        <h3>Phonebook</h3>
        <ContactForm onSubmit={this.createContact} />

        <div className="contactList">
          <h4>Contacts</h4>
          <Filter filter={filter} handleInput={this.handleInput} />
          <ContactList contacts={contacts} onRemove={this.handleRemove} />
        </div>
      </div>
    );
  }
}
