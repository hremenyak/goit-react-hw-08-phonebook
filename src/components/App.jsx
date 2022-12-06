import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Wrapper } from './App.styled';
import { GlobalStyle } from './GlobalStyle';
import { useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selectors';

export const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  return (
    <>
      <Wrapper>
        <h1> Phonebook</h1>
        <ContactForm />
        <h1> Contacts</h1>
        <Filter />
        {isLoading && !error && <div> Loading... </div>}
        <ContactList />
        <GlobalStyle />
      </Wrapper>{' '}
    </>
  );
};
