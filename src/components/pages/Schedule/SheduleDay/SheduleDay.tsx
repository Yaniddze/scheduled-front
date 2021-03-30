import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Lesson, LessonAutoCompleate } from '../../../../models/Lesson';
import { LessonEditableCard } from '../../../ui';
import { LessonField } from './styled';
import { LessonAdd } from '../../../ui/Lesson/LessonAdd';



type SheduleDayParams = {
  id: string
  day: string
}
type SheduleDayProps = {}

const lessonsList: Lesson[] = [
  new Lesson('физ-ра', 'Лопухина', new Date(2021, 3, 30, 12, 30, 0, 0), 90, 1),
  new Lesson('Математика', 'Лопухина', new Date(2021, 3, 30, 14, 0, 0, 0), 90, 2),
  new Lesson('физ-ра', 'Жениховыч', new Date(2021, 3, 30, 15, 30, 0, 0), 90, 3),
];

const Lessons: LessonAutoCompleate[] = [
  { name: 'физ-ра', id: 1 },
  { name: 'Математика', id: 2 },
  { name: 'Физика', id: 3 },
];

export const SheduleDayPage: React.FC<SheduleDayProps> = (props) => {
  const pageParms = useParams<SheduleDayParams>();
  const id = pageParms.id;
  const day = pageParms.day;

  const isOwner = false;
  const [lessons, setLessons] = useState<Lesson[]>(lessonsList);

  const deleteHandle = (lessonId: number) => {
    setLessons(lessons.filter((lesson) => lesson.id != lessonId));
  }

  const addHandle = (time: Date, lesson: LessonAutoCompleate) => {
    setLessons(lessons.concat(new Lesson(lesson.name, 'From server', time, 90, lessons.length + 1)));
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
        <LessonAdd lessons={Lessons} onAdd={addHandle} />
      }

    </LessonField>
  );
};