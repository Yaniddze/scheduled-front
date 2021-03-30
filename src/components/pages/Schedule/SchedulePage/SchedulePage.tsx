import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { ShedulePageLink } from './styled';


// type
type SchedulePageParams = {
  id: string
}
type SchedulePageProps = {}

export const SchedulePage: React.FC<SchedulePageProps> = (props) => {
  const id = useParams<SchedulePageParams>().id;

  return (
    <div>
      <ShedulePageLink to={`/schedule/${id}/1`}>
        <h3>Пн</h3>

        <p>что-то важное на день 1</p>
      </ShedulePageLink>
      <ShedulePageLink to={`/schedule/${id}/2`}>
        <div>
          <h3>Вт</h3>

          <p>что-то важное на день 2</p>
        </div>
      </ShedulePageLink>
      <ShedulePageLink to={`/schedule/${id}/3`}>
        <div>
          <h3>Ср</h3>

          <p>что-то важное на день 3</p>
        </div>
      </ShedulePageLink>
      <ShedulePageLink to={`/schedule/${id}/4`}>
        <div>
          <h3>Чт</h3>

          <p>что-то важное на день 4</p>
        </div>
      </ShedulePageLink>
      <ShedulePageLink to={`/schedule/${id}/5`}>
        <div>
          <h3>Пт</h3>

          <p>что-то важное на день 5</p>
        </div>
      </ShedulePageLink>
      <ShedulePageLink to={`/schedule/${id}/6`}>
        <div>
          <h3>Сб</h3>

          <p>что-то важное на день 6</p>
        </div>
      </ShedulePageLink>
      <ShedulePageLink to={`/schedule/${id}/7`}>
        <div>
          <h3>Вс</h3>

          <p>что-то важное на день 7</p>
        </div>
      </ShedulePageLink>
    </div>
  );
};