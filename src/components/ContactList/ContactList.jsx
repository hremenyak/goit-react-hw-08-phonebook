import { Wrapper, Item } from './ContactList.styled';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const handleDeleteButton = contactId => {
    dispatch(deleteContact(contactId));
  };
  if (!filter) {
    return;
  }
  // const visibleContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  console.log(contacts);
  return (
    <>
      <Wrapper>
        {contacts.map(contact => (
          <Item key={contact.id}>
            <span>
              {contact.name}: {contact.number}
            </span>

            <Button
              type="button"
              onClick={() => handleDeleteButton(contact.id)}
              variant="outlined"
              startIcon={<DeleteIcon />}
              size="small"
            >
              Delete
            </Button>
          </Item>
        ))}
      </Wrapper>
    </>
  );
};
