import { Link } from 'react-router-dom';
import { LoginForm } from 'components/LoginForm/LoginForm';
export const Login = () => {
  return (
    <div>
      Login
      <LoginForm />
      <p>
        Haven't got an acount yet?
        {<Link to="signup"> Sign up</Link>} now!
      </p>
    </div>
  );
};
