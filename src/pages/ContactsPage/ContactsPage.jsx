import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { Container } from './ContactsPage.styled';
export const ContactsPage = () => {
  return (
    <Container>
      <h1> Phonebook</h1>
      <ContactForm />
      <h1> Contacts</h1>
      <Filter />
      {/* {isLoading && !error && <div> Loading... </div>} */}
      <ContactList />
    </Container>
  );
};
