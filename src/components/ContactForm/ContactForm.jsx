import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { Button, TextField } from '@mui/material';
import { IoIosAddCircle } from 'react-icons/io';
import { Form } from './ContactForm.styled';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onFormChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);

        break;
      default:
        throw new Error('There has been a mistake. Try again, please.');
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const checkName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkName) {
      toast.error(`${name} is already in your contacts.`);

      return;
    } else {
      dispatch(addContact(name, number));
    }

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        size="small"
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onFormChange}
      />

      <TextField
        id="outlined-basic"
        label="Phone number"
        variant="outlined"
        size="small"
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={onFormChange}
      />
      <Button
        type="submit"
        variant="outlined"
        size="small"
        startIcon={<IoIosAddCircle />}
      >
        Add contact
      </Button>
      <Toaster />
    </Form>
  );
};
