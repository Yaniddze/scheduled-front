import styled from 'styled-components';

export const AppCardBody = styled.div`
  background-color: ${(props) => props.theme.colors.palette.layout.main.color};
  color: ${(props) => props.theme.colors.palette.layout.main.textColor};

  border-radius: 6px;
  padding: 16px;
  box-shadow: 0 0 5px 0 #000;
`;