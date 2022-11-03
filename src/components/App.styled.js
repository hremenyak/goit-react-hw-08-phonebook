import styled from 'styled-components';
export const Wrapper = styled.div`
  width: 500px;
  padding: ${p => p.theme.space[4]}px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid grey;
  border-radius: ${p => p.theme.radii.normal};
  align-items: center;
`;
