import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Lesson, LessonAutoCompleate } from '../../../../models/Lesson';
import { LessonEditableCard } from '../../../ui';
import { LessonField } from './styled';
import { LessonAdd } from '../../../ui/Lesson/LessonAdd';
import { RootState } from '../../../../reduxStore';
import { CreateScheduled, DeleteScheduled } from '../../../../server';

import { GetSubjects } from '../../../../server';

import { useServer } from '../../../../hooks';

type SheduleDayParams = {
  id: string
  day: string
}

export const SheduleDayPage: React.FC = (props) => {
  const pageParms = useParams<SheduleDayParams>();
  const id = pageParms.id;

  const subjs = useServer(GetSubjects);

  const tempDate = useSelector((store: RootState) => store.temp);
  const group = useSelector((store: RootState) => store.group.find(x => x.id === Number(id)));
  
  const day = pageParms.day; // temp when data is temp

  const isOwner = group?.owner || false;
  const task = group?.tasks.find(x => x.date === day);

  const [lessons, setLessons] = useState<Lesson[]>(task?.subjects.map(x => new Lesson(x.subjectName, x.teacher, new Date(x.startDate), x.durationInMinutes, x.id)) || []);

  const [lessonsAuto, setLessonsAuto] = useState<LessonAutoCompleate[]>([]);

  useEffect(() => {
    subjs.fetch(undefined);
  }, []);

  const deleteRequest = useServer(DeleteScheduled);
  const createRequest = useServer(CreateScheduled);

  const deleteLoading = deleteRequest.state.fetching;
  const deleteSuccess = !deleteLoading && deleteRequest.state.answer.succeeded;
  const createLoading = createRequest.state.fetching;
  const createSuccess = !createLoading && createRequest.state.answer.succeeded;

  const loading = deleteLoading || createLoading || subjs.state.fetching;
  const successSubjs = !loading && subjs.state.answer.succeeded;

  const deleteHandle = (lessonId: number) => {
    // delete
    setLessons(lessons.filter((lesson) => lesson.id != lessonId));

    deleteRequest.fetch({
      scheduleId: lessonId
    });
  }

  useEffect(() => {
    if (successSubjs) {
      setLessonsAuto(subjs.state.answer.data!);

      subjs.reload();
    }
  }, [successSubjs]);

  const addHandle = (time: Date, lesson: LessonAutoCompleate) => {
    // add
    setLessons(lessons.concat(new Lesson(lesson.name, lesson.teacherName, time, 90, lessons.length + 1)));

    const utcDate = new Date(time.getTime() - time.getTimezoneOffset() * 60000);

    createRequest.fetch({
      groupId: Number(id),
      durationInMinutes: 90,
      startDate: utcDate,
      subjectId: lesson.id
    });
  }


  if(deleteSuccess) {
    deleteRequest.reload();
  }

  if(createSuccess) {
    createRequest.reload();
  }

  return (
    <LessonField>

      {/* no lessons */}
      {lessons.length == 0 &&
        <p>Занятий нет.</p>
      }

      {/* lessons cards */}
      {lessons.map((lesson, idx) => (
        <LessonEditableCard
          isOwner={isOwner}
          key={idx}
          lesson={lesson}
          deleteClick={() => {
            deleteHandle(lesson.id);
          }}
        />
      ))}

      {/* add new lesson */}
      { isOwner &&
        <LessonAdd lessons={lessonsAuto} onAdd={addHandle} />
      }

    </LessonField>
  );
};