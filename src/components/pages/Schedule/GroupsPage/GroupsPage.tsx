import React, { useState } from 'react';
import { Group } from '../../../../models/Group';
import { GroupCard } from '../../../ui/Group';
import { GroupPageContent } from './styled';
import { GroupsSceleton } from '../../../ui/sceletons/Groups/Groups';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';


type GroupsPageProps = {}

const groupMock = Array.from({ length: 24 }).map((_, idx) => new Group(idx + 1, `ПС ${idx + 1}`));

export const GroupsPage: React.FC<GroupsPageProps> = (props) => {
  const [groups, setGroups] = useState<Group[]>(groupMock);
  const [loading, setLoading] = useState(false);
  const appHistory = useHistory();

  if (loading) return (
    <GroupsSceleton count={12} />
  );

  return (
    <GroupPageContent>
      {groups.map((el) => <GroupCard to={`/schedule/${el.id}`} key={el.id} group={el} />)}

      <Button variant="contained" color="primary" onClick={() => {
        appHistory.push('/schedule/add');
      }}>
        Войти
      </Button>
      <Button 
      variant="contained" 
       onClick={() => {
        appHistory.push('/schedule/create');
      }}
      classes={{
        root: '--red-button'
      }}>
        Создать
      </Button>
    </GroupPageContent>
  );
};