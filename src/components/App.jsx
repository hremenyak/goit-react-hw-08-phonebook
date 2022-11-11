import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Wrapper } from './App.styled';
import { GlobalStyle } from './GlobalStyle';

const LOCAL_STORAGE_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contactName, contactNumber) => {
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

      setContacts(prevContacts => {
        return [...prevContacts, newContact];
      });
    }
  };

  const onInputChange = e => {
    setFilter(e.target.value);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const normalizedValue = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedValue)
  );

  return (
    <Wrapper>
      <h1> Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <Toaster />
      <h1> Contacts</h1>
      <Filter onChange={onInputChange} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
      <GlobalStyle />
    </Wrapper>
  );
};
