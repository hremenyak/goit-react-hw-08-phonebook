import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { IoMdPerson } from 'react-icons/io';
import { deleteContact } from 'redux/operations';
import { ListItem } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDeleteButton = contactId => {
    dispatch(deleteContact(contactId));
  };
  return (
    <ListItem>
      <p>
        <span>
          <IoMdPerson />
        </span>
        {name}: {phone}
      </p>
      <Button
        type="button"
        onClick={() => handleDeleteButton(id)}
        variant="outlined"
        startIcon={<DeleteIcon />}
        size="small"
      >
        Delete
      </Button>
    </ListItem>
  );
};
