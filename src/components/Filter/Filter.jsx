import propTypes from 'prop-types';
import { Text } from './Filter.styled';
export const Filter = ({ onChange }) => {
  return (
    <>
      <Text>Find contacts by name</Text>
      <input onChange={onChange} />
    </>
  );
};
Filter.propTypes = {
  onChange: propTypes.func.isRequired,
};
