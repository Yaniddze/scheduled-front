import styled from 'styled-components';

export const LessonField = styled.div`
  background-color: ${(props) => props.theme.colors.palette.layout.main.color};
  color: ${(props) => props.theme.colors.palette.layout.main.textColor};

  border-radius: 8px;
  padding: 8px;
`;