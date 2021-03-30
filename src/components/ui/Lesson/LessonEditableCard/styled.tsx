import styled from 'styled-components';

export const LessonItem = styled.div`
  background-color: ${(props) => props.theme.colors.palette.layout.main.color};
  color: ${(props) => props.theme.colors.palette.layout.main.textColor};
  border-bottom: 2px solid ${(props) => props.theme.colors.main.color};

  border-radius: 8px;
  padding: 8px;

  display: flex;
  justify-content: space-between;

  .lesson-info {
    display: inline-block;
    padding: 8px;
    background-color: ${(props) => props.theme.colors.palette.layout.main.textColor};
    font-weight: bold;
    color: #333;
    border-radius: 8px;
    box-shadow: 0 0 6px #333;

    span:not(:last-child) {
      margin-right: 10px;
    }
  }

  .delete-icon {
    color: #d46087;
    stroke: black;
  }
`;