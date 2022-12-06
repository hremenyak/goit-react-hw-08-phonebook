import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
`;
