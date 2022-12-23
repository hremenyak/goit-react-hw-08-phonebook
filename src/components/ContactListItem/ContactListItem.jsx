import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import { IoMdPerson } from 'react-icons/io';
import { deleteContact } from 'redux/contacts/operations';
import { ListItem } from './ContactListItem.styled';
import { useState } from 'react';
import { EditUserForm } from 'components/EditUserForm/EditUserForm';
import { selectShowModal } from 'redux/contacts/selectors';

export const ContactListItem = ({ id, name, number }) => {
  const [showModal, setShowModal] = useState(false);
  const [contactId, setContactId] = useState(false);
  // const showModal = useSelector(selectShowModal);

  const dispatch = useDispatch();

  const handleDeleteButton = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleEditButton = id => {
    setContactId(id);
    setShowModal(prevState => ({ showModal: !prevState.showModal }));
  };
  return (
    <ListItem>
      <p>
        <span>
          <IoMdPerson />
        </span>
        {name}: {number}
      </p>

      {showModal ? (
        <EditUserForm userId={contactId} />
      ) : (
        <Button
          type="button"
          variant="outlined"
          startIcon={<EditIcon />}
          size="small"
          onClick={() => handleEditButton(id)}
        >
          Edit
        </Button>
      )}
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
