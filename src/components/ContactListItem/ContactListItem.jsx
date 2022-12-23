import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import { IoMdPerson } from 'react-icons/io';
import { deleteContact } from 'redux/contacts/operations';
import { ListItem } from './ContactListItem.styled';
import { useState } from 'react';
import { EditUserForm } from 'components/EditUserForm/EditUserForm';

export const ContactListItem = ({ id, name, number }) => {
  const [showModal, setShowModal] = useState(false);
  const [contactId, setContactId] = useState(false);

  const dispatch = useDispatch();

  const handleDeleteButton = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleEditButton = id => {
    setContactId(id);
    setShowModal(true);
  };
  return (
    <ListItem>
      <p>
        <span>
          <IoMdPerson />
        </span>
        {name}: {number}
      </p>
      <Button
        type="button"
        variant="outlined"
        startIcon={<EditIcon />}
        size="small"
        onClick={() => handleEditButton(id)}
      >
        Edit
      </Button>
      {showModal && <EditUserForm userId={contactId} />}
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
