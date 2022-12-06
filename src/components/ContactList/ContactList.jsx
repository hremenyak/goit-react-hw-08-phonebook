import { Wrapper } from './ContactList.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContacts,
  getError,
  getFilter,
  getIsLoading,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const contactsFilter = useSelector(getFilter);
  // const error = useSelector(getError);

  // const isLoading = useSelector(getIsLoading);
  // const handleDeleteButton = contactId => {
  //   dispatch(deleteContact(contactId));
  // };
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
  );

  return (
    <>
      <Wrapper>
        {visibleContacts.map(contact => (
          <ContactListItem key={contact.id} {...contact} />
        ))}
      </Wrapper>
    </>
  );
};

//  <p>
//               <span>
//                 <IoMdPerson />
//               </span>
//               {contact.name}: {contact.phone}
//             </p>

//             <Button
//               type="button"
//               onClick={() => handleDeleteButton(contact.id)}
//               variant="outlined"
//               // disabled={isLoading}
//               startIcon={<DeleteIcon />}
//               size="small"
//             >
//               Delete
//             </Button>
