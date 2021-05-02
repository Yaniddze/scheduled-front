import React, { FC } from 'react';
import { useParams, useHistory } from 'react-router';
import { ShedulePageLink } from './styled';

import { useServerQuery } from '../../../../hooks';
import { GetDetailedGroup } from '../../../../server';

// type
type SchedulePageParams = {
  id: string
}

export const SchedulePage: FC = () => {
  const id = useParams<SchedulePageParams>().id;

  const { data } = useServerQuery(`detailedGroup-${id}`, GetDetailedGroup, { id: Number(id) });

  const toShow = data?.tasks.map(task => (
    <ShedulePageLink to={`/schedule/${id}/${task.date}`} key={task.date}>
      <h3>{task.date}</h3>
    </ShedulePageLink>
  ));

  return (
    <div>
      {toShow}
      {toShow?.length === 0 ? 'Предметов нет' : ''}
    </div>
  );
};