import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn, 'restricted');

  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
