import propTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Text, Wrapper } from './Filter.styled';
export const Filter = ({ onChange }) => {
  return (
    <Wrapper>
      <Text>Find contacts by name</Text>
      <TextField
        id="outlined-basic"
        variant="outlined"
        size="small"
        onChange={onChange}
      />
    </Wrapper>
  );
};
Filter.propTypes = {
  onChange: propTypes.func.isRequired,
};
