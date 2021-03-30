import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ShedulePageLink = styled(Link)`
  display: block;
  background-color: ${(props) => props.theme.colors.palette.layout.main.color};
  color: ${(props) => props.theme.colors.palette.layout.main.textColor};

  border-radius: 8px;
  padding: 16px;
  margin: 10px 0;
`;