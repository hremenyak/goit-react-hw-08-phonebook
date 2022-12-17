import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { Container } from './Contacts.styled';
export const Contacts = () => {
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
