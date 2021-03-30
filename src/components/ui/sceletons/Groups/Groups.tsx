import React from 'react';
import { GroupSceletonCard, GroupsSceletonContent } from './styled';

type GroupsSceletonProps = {
  count?: number
}

export const GroupsSceleton: React.FC<GroupsSceletonProps> = ({
  count = 8
}) => {

  const cards = [];
  for(let i = 0; i < count; i++) {
    cards.push(<GroupSceletonCard key={i} />);
  }

  return (
    <GroupsSceletonContent>
      {cards}
    </GroupsSceletonContent>
  );
};