import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    dispatch(login({ password, email }));
  };
  return (
    <div>
      <h3>Log in to see your contacts</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" name="email" />{' '}
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button>LogIn</button>
      </form>
    </div>
  );
};
