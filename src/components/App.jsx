// import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Contacts } from 'pages/Contacts/Contacts';
import { Login } from 'pages/Login/Login';
import { SignUp } from 'pages/SignUp/SignUp';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
// import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />

          <Route path="contacts" element={<Contacts />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
