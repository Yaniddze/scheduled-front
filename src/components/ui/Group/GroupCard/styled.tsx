import styled from 'styled-components';

export const GroupCardContent = styled.div`
  background-color: ${(props) => props.theme.colors.palette.layout.main.color};
  color: ${(props) => props.theme.colors.palette.layout.main.textColor};

  border-radius: 6px;
  padding: 16px;
  box-shadow: 0 0 5px 0 #000;

  cursor: pointer;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 15px 2px #111;
  }
`;