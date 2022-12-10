import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ListItem } from './ContactListItem.styled';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { IoMdPerson } from 'react-icons/io';
import { toast } from 'react-hot-toast';

export const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);

  const handleDeleteButton = contactId => {
    dispatch(deleteContact(contactId));
    toast.success(`${name} was deleted from your contacts.`);
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
