import { duration, IconButton } from '@material-ui/core';
import React from 'react';
import { Lesson } from '../../../../models/Lesson';
import { LessonItem } from './styled';
import DeleteIcon from '@material-ui/icons/Delete';

type LessonEditableCardProps = {
  lesson: Lesson
  isOwner: boolean

  deleteClick: (event?: React.MouseEvent) => void
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