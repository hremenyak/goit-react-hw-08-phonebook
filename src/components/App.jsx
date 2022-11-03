import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Wrapper } from './App.styled';
import { GlobalStyle } from './GlobalStyle';

const LOCAL_STORAGE_KEY = 'contacts';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    try {
      const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
      const parsedContacts = JSON.parse(savedContacts);

      if (parsedContacts) {
        this.setState({ contacts: parsedContacts });
      }
    } catch (e) {
      console.log(e);
    }
  }

  componentDidUpdate(_, prevState) {
    const newContacts = this.state.contacts;
    const prevContacts = prevState.contacts;
    if (prevContacts !== newContacts) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContacts));
    }
  }

  addContact = (contactName, contactNumber) => {
    const { contacts } = this.state;
    const checkName = contacts.find(
      contact => contact.name.toLowerCase() === contactName.toLowerCase()
    );

    if (checkName) {
      toast.error(`${contactName} is already in your contacts.`);
      return;
    } else {
      const newContact = {
        id: nanoid(),
        name: contactName,
        number: contactNumber,
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  onInputChange = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedValue = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue)
    );
    return (
      <Wrapper>
        <h1> Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <Toaster />
        <h1> Contacts</h1>
        <Filter onChange={this.onInputChange} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
        <GlobalStyle />
      </Wrapper>
    );
  }
}
