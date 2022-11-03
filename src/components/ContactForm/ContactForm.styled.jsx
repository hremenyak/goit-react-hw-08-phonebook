import styled from 'styled-components';

export const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[3]}px;
  border: 1px solid grey;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 100px;
  outline: none;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;
  padding: ${p => p.theme.space[2]}px;
  &:hover {
    background-color: ${p => p.theme.colors.accent};
  }
`;

export const Label = styled.label`
  font-weight: ${p => p.theme.fontWeights.heading};
`;
