import React, { useState } from 'react';
import { LessonAddContent } from './styled';
import { MuiPickersUtilsProvider, TimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ruLocale from "date-fns/locale/ru";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import { LessonAutoCompleate } from '../../../../models/Lesson';
import { Box, Button } from '@material-ui/core';


type LessonAddProps = {
  lessons: LessonAutoCompleate[]
  onAdd: (time: Date, lesson: LessonAutoCompleate) => void
}

export const LessonAdd: React.FC<LessonAddProps> = ({
  lessons,
  onAdd
}) => {
  const [editing, setEditing] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedLesson, setSelectedLesson] = useState<LessonAutoCompleate>();


  const addHandle = () => {
    if (!selectedLesson) return;
    onAdd(selectedDate, selectedLesson);

    setSelectedDate(() => new Date());
    setSelectedLesson(() => undefined);
    setEditing(() => false);
  }

  return (
    <LessonAddContent>
      <div className={`lesson-add ${editing ? 'edit' : ''}`}>
        <h3>Введите урок и время</h3>

        <div className="lesson-add__info">
          <Box flexGrow={1} minWidth={200}>
            <Autocomplete
              id="combo-box-demo"
              options={lessons}
              getOptionLabel={(item: LessonAutoCompleate) => item.name}
              value={selectedLesson}
              onChange={(_, lesson) => setSelectedLesson(lesson!)}
              renderInput={(params) => <TextField  {...params} label="Предмет" variant="outlined" />}
              fullWidth
            />
          </Box>

          <Box flexGrow={1} minWidth={200}>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
              <TimePicker
                clearable
                ampm={false}
                label="выбирите время"
                value={selectedDate}
                onChange={(date) => setSelectedDate(date as any)}
                minutesStep={5}
                fullWidth
              />
            </MuiPickersUtilsProvider>
          </Box>
        </div>

        <Box mt={1}>
          <Button variant='contained' color="primary" onClick={addHandle}>
            Добавить
            </Button>
        </Box>

        <div className="lesson-add-button" onClick={() => {
          setEditing(!editing);
        }}>
          <AddIcon color="action" />
        </div>
      </div>
    </LessonAddContent>
  );
};