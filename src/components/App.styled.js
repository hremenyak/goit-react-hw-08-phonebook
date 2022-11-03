import styled from 'styled-components';
export const Wrapper = styled.div`
  width: 500px;
  padding: ${p => p.theme.space[4]}px;
  margin-left: auto;
  margin-right: auto;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.normal};
  align-items: center;
`;
