import styled from 'styled-components';

export const GroupsSceletonContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
`;

export const GroupSceletonCard = styled.div`
  background: linear-gradient(-60deg, #bdbdbd 57%, #fff 60%, #bdbdbd 62%);
  background-position: 0px;
  border-radius: 6px;
  height: 93px;
  animation: GroupSceletonCard 0.5s infinite forwards linear;

  &:hover {
    background-position: 50%;
  }

  @keyframes GroupSceletonCard {
    from{
      background-position: 0px;
    }
    to{ 
      background-position: 150px;
    }
  }
`;