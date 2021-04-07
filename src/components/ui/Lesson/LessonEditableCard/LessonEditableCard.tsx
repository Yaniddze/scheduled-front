import React from 'react';
import { Lesson } from '../../../../models/Lesson';
import { LessonItem } from './styled';

type LessonEditableCardProps = {
  lesson: Lesson
  isOwner: boolean
}

export const LessonEditableCard: React.FC<LessonEditableCardProps> = ({
  lesson,
}) => {

  const durationTime = new Date(lesson.time);

  durationTime.setMinutes(durationTime.getMinutes() + lesson.duration);

  return (
    <LessonItem>
      <div>
        <h3>{lesson.name}</h3>
        <div className="lesson-info">
          <span>{lesson.teacher}</span>
          <span>{lesson.time.toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit'
          })} - {durationTime.toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit'
          })}</span>
        </div>
      </div>
    </LessonItem>
  );
};