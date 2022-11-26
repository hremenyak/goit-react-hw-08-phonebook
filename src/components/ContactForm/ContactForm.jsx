import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Button, TextField } from '@mui/material';
import { IoIosAddCircle } from 'react-icons/io';
import { Form } from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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
    onSubmit(name, number);
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
    </Form>
  );
};

ContactForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
