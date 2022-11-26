import styled from 'styled-components';

export const Text = styled.p`
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  font-weight: ${p => p.theme.fontWeights.heading};
  color: ${p => p.theme.colors.gray};
`;
