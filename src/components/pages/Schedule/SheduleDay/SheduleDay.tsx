import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { LessonField } from './styled';

import { RootState } from '../../../../reduxStore';
import { Lesson, LessonAutoCompleate } from '../../../../models/Lesson';
import { LessonEditableCard } from '../../../ui';

import { GetSubjects, GetScheduled } from '../../../../server';
import { useServer } from '../../../../hooks';

type SheduleDayParams = {
  id: string
  day: string
}

export const SheduleDayPage: React.FC = (props) => {
  const pageParms = useParams<SheduleDayParams>();
  const id = pageParms.id;

  const lessonsFetcher = useServer(GetScheduled);

  const group = useSelector((store: RootState) => store.group.find(x => x.id === Number(id)));
  
  const day = pageParms.day; // temp when data is temp

  const isOwner = group?.owner || false;
  const task = group?.tasks.find(x => x.date === day);

  const [lessons, setLessons] = useState<Lesson[]>(task?.subjects.map(x => new Lesson(x.subjectName, x.teacher, new Date(x.startDate), x.durationInMinutes, x.id)) || []);

  useEffect(() => {
    lessonsFetcher.fetch({
      startDate: day,
      groupId: id,
    })
  }, []);

  const loading = lessonsFetcher.state.fetching;
  const successLessons = !loading && lessonsFetcher.state.answer.succeeded;

  useEffect(() => {

    if (successLessons) {
      setLessons(lessonsFetcher.state.answer.data!
        .map(lesson => new Lesson(
          lesson.subjectName, 
          lesson.teacher, 
          new Date(lesson.startDate), 
          lesson.durationInMinutes, 
          lesson.id
        )));

      lessonsFetcher.reload();
    }
  }, [successLessons]);

  return (
    <LessonField>

      {/* no lessons */}
      {lessons?.length == 0 &&
        <p>Занятий нет.</p>
      }

      {/* lessons cards */}
      {lessons.map((lesson, idx) => (
        <LessonEditableCard
          isOwner={isOwner}
          key={idx}
          lesson={lesson}
        />
      ))}

    </LessonField>
  );
};