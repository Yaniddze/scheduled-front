import styled from 'styled-components';

export const GroupPageContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-rows: 93px;
  gap: 15px;

  .--red-button {
    background-color: #ffc107;

    &:hover {
      background-color: #ff8f00;
    }
  }
`;