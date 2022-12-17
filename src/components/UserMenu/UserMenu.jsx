import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { logout } from 'redux/auth/operations';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <div>
      <p>Welcome user:{user.name}</p>
      <button type="button" onClick={handleClick}>
        Log Out
      </button>
    </div>
  );
};
