import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Wrapper } from './App.styled';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <>
      <Wrapper>
        <h1> Phonebook</h1>
        <ContactForm />
        <h1> Contacts</h1>
        <Filter />
        <ContactList />
        <GlobalStyle />
      </Wrapper>{' '}
    </>
  );
};
