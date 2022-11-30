import { Wrapper, Item } from './ContactList.styled';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
// import { RxDot } from 'react-icons/rx';
import { IoMdPerson } from 'react-icons/io';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const contactsFilter = useSelector(getFilter);
  const handleDeleteButton = contactId => {
    dispatch(deleteContact(contactId));
  };
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
  );
  return (
    <>
      <Wrapper>
        {visibleContacts.map(contact => (
          <Item key={contact.id}>
            <p>
              <span>
                <IoMdPerson />
              </span>
              {contact.name}: {contact.number}
            </p>

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
