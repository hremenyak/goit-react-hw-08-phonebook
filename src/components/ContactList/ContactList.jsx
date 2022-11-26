import propTypes from 'prop-types';
import { Wrapper, Item } from './ContactList.styled';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
export const ContactList = ({ contacts, onDeleteContact }) => {
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
              onClick={() => onDeleteContact(contact.id)}
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

ContactList.propTypes = {
  contacts: propTypes.arrayOf(propTypes.object).isRequired,
  onDeleteContact: propTypes.func.isRequired,
};
