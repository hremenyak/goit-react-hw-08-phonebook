import { Wrapper } from './ContactList.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Wrapper>
        {visibleContacts.length > 0 ? (
          visibleContacts.map(contact => (
            <ContactListItem key={contact.id} {...contact} />
          ))
        ) : (
          <div>Unfortunately, we couldn't find any matches.</div>
        )}
      </Wrapper>
    </>
  );
};
