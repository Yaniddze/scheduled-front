import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ShedulePageLink } from './styled';

import { useServer } from '../../../../hooks';
import { GetDetailedGroup, DetailedGroup } from '../../../../server';

// type
type SchedulePageParams = {
  id: string
}
type SchedulePageProps = {}

export const SchedulePage: React.FC<SchedulePageProps> = (props) => {
  const id = useParams<SchedulePageParams>().id;
  const [group, setGroup] = useState<DetailedGroup>();

  const detailed = useServer(GetDetailedGroup);

  useEffect(() => {
    detailed.fetch({
      id: Number(id)
    });
  }, []);

  const loading = detailed.state.fetching;
  const success = detailed.state.answer.succeeded;

  useEffect(() => {
    if (success) {
      setGroup(detailed.state.answer.data!);

      detailed.reload();
    }
  }, [success]);

  const toShow = group?.tasks.map(task => (
    <ShedulePageLink to={`/schedule/${id}/${task.date}`} key={task.date}>
      <h3>{task.date}</h3>
    </ShedulePageLink>
  ))

  return (
    <div>
      {toShow}
    </div>
  );
};