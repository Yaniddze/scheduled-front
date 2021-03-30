import React from 'react';
import { Link } from 'react-router-dom';
import { Group } from '../../../../models/Group';
import { GroupCardContent } from './styled';


type GroupCardProps = {
  group: Group
  to: string
}

export const GroupCard: React.FC<GroupCardProps> = ({
  group,
  to
}) => {

  return (
    <Link to={to}>
      <GroupCardContent>
        <h3>{group.name}</h3>
      </GroupCardContent>
    </Link>
  );
};