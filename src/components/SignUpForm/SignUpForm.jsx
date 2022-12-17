import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/operations';

export const SignUpForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.username.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    console.log({ name, email, password }, 'signupform');

    dispatch(signup({ name, email, password }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input type="text" name="username" />{' '}
      </label>
      <label>
        Email
        <input type="email" name="email" />{' '}
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Sign up</button>
    </form>
  );
};
