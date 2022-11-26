import propTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Text } from './Filter.styled';
export const Filter = ({ onChange }) => {
  return (
    <>
      <Text>Find contacts by name</Text>
      <TextField
        id="outlined-basic"
        variant="outlined"
        size="small"
        onChange={onChange}
      />
    </>
  );
};
Filter.propTypes = {
  onChange: propTypes.func.isRequired,
};
