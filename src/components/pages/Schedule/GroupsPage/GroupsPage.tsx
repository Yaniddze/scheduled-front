import React, { useEffect, useState } from 'react';
import { Group } from '../../../../models/Group';
import { GroupCard } from '../../../ui/Group';
import { GroupPageContent } from './styled';
import { GroupsSceleton } from '../../../ui/sceletons/Groups/Groups';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { GetGroups } from '../../../../server';
import { useServer } from '../../../../hooks';


type GroupsPageProps = {}

export const GroupsPage: React.FC<GroupsPageProps> = (props) => {
  const [groups, setGroups] = useState<Group[]>([]);
  const appHistory = useHistory();

  const groupsRequest = useServer(GetGroups);
  const groupsLoading = groupsRequest.state.fetching;
  const groupsSuccess = !groupsLoading && groupsRequest.state.answer.succeeded;

  const loading = groupsLoading;


  useEffect(() => {
    groupsRequest.fetch(undefined);
  }, []);

  if(groupsSuccess) {
    setGroups(groupsRequest.state.answer.data as Group[]);

    groupsRequest.reload();
  }


  if (loading) return (
    <GroupsSceleton count={6} />
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