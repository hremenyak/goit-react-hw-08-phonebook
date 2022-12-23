import { TextField, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectContacts } from 'redux/contacts/selectors';
import { updateContact } from 'redux/contacts/operations';

export const EditUserForm = ({ userId }) => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const contact = contacts.find(contact => contact.id === userId);

  const { name } = contact;
  const { number } = contact;

  const handleSubmit = e => {
    e.preventDefault();
    console.log(newName, newNumber);
    dispatch(
      updateContact({
        name: newName || name,
        number: newNumber || number,
        id: userId,
      })
    );
  };

  const onFormChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setNewName(value);
        break;
      case 'number':
        setNewNumber(value);

        break;
      default:
        throw new Error('There has been a mistake. Try again, please.');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        size="small"
        type="text"
        name="name"
        defaultValue={name}
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
        defaultValue={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={onFormChange}
      />
      <Button
        type="submit"
        // onClick={() => handleDeleteButton(id)}
        variant="outlined"
        size="small"
      >
        Save
      </Button>
    </form>
  );
};
