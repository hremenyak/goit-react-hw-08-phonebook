import styled from 'styled-components';

export const Button = styled.button`
outline: none;
  border:  ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;
  width: 70px;
 

  padding: ${p => p.theme.space[2]}px;
  &:hover {
    background-color: ${p => p.theme.colors.accent}`;

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: ${p => p.theme.space[3]}px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px};
  }
`;
