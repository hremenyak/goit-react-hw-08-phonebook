import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Wrapper } from './App.styled';
import { GlobalStyle } from './GlobalStyle';
// import { findContact } from 'redux/contactsSlice';
// import { useLocalStorage } from 'hooks/useLocalStorage';

// const LOCAL_STORAGE_KEY = 'contacts';

export const App = () => {
  const [filter, setFilter] = useState('');
  // const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const onInputChange = e => {
    setFilter(e.target.value);
    // dispatch(findContact(e.target.value));
  };

  const normalizedValue = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedValue)
  );
  return (
    <Wrapper>
      <h1> Phonebook</h1>
      <ContactForm />
      <h1> Contacts</h1>
      <Filter onChange={onInputChange} />
      <ContactList contacts={visibleContacts} />
      <GlobalStyle />
    </Wrapper>
  );
};

// VISIBLE CONTACTS????  oninput change and
