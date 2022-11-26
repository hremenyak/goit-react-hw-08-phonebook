import styled from 'styled-components';

export const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  border-radius: 5px;
`;
