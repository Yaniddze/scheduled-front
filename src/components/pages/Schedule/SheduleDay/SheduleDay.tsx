import React from 'react';
import { useParams } from 'react-router';
import { LessonField } from './styled';

import { Lesson } from '../../../../models/Lesson';
import { LessonCard } from '../../../ui';

import { GetScheduled } from '../../../../server';
import { useServerQuery } from '../../../../hooks';

type SheduleDayParams = {
  id: string
  day: string
}

export const SheduleDayPage: React.FC = (props) => {
  const pageParms = useParams<SheduleDayParams>();
  const id = pageParms.id;
  const day = pageParms.day; // temp when data is temp

  const { data } = useServerQuery(`schedule-${id}-${day}`, GetScheduled, {
    startDate: day,
    groupId: id,
  });

  return (
    <LessonField>

      {/* no lessons */}
      {data?.length == 0 &&
        <p>Занятий нет.</p>
      }

      {/* lessons cards */}
      {data?.map((lessonItem, idx) => {
        const lesson = new Lesson(
          lessonItem.subjectName, 
          lessonItem.teacher, 
          new Date(lessonItem.startDate), 
          lessonItem.durationInMinutes, 
          lessonItem.id
        );

        return (
          <LessonCard
            key={idx}
            lesson={lesson}
          />
        )}
      )}

    </LessonField>
  );
};