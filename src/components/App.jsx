// import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Contacts } from 'pages/Contacts/Contacts';
import { Login } from 'pages/Login/Login';
import { SignUp } from 'pages/SignUp/SignUp';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PrivateRoute redirectTo="/contacts" component={<Login />} />
            }
          />

          <Route
            path="contacts"
            element={
              <RestrictedRoute redirectTo="/" component={<Contacts />} />
            }
          />
          <Route
            path="signup"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<SignUp />} />
            }
          />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
