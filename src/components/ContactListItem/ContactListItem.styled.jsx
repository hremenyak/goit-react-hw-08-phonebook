import styled from 'styled-components';
export const ListItem = styled.li`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
  p {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      margin-right: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #1976d2;
    }
  }
`;
