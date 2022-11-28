import { Wrapper, Item } from './ContactList.styled';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDeleteButton = contactId => {
    dispatch(deleteContact(contactId));
  };
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
