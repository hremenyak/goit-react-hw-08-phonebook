import { NavLink } from 'react-router-dom';
import { NavigationStyled } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavigationStyled>
      <NavLink to="/contacts">Contacts</NavLink>
      <NavLink to="/">Log in</NavLink>
    </NavigationStyled>
  );
};
