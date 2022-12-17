import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn, 'private');
  const shouldRedirect = isLoggedIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
