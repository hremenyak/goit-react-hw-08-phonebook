import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import { Text, Wrapper } from './Filter.styled';
import { setFilter } from 'redux/contactsSlice';
export const Filter = () => {
  const dispatch = useDispatch();

  const onInputChange = e => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue));
  };
  return (
    <Wrapper>
      <Text>Find contacts by name</Text>
      <TextField
        id="outlined-basic"
        variant="outlined"
        size="small"
        onChange={onInputChange}
      />
    </Wrapper>
  );
};
