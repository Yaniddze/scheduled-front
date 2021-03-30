import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { ShedulePageLink } from './styled';
import DateFnsUtils from '@date-io/date-fns';
import ruLocale from "date-fns/locale/ru";

import { Check } from '@material-ui/icons';

import { IconButton } from '@material-ui/core';

import { useServer } from '../../../../hooks';
import { GetDetailedGroup, DetailedGroup } from '../../../../server';
import { Button } from '../../../ui';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';

import { SetTemp } from '../../../../reduxStore/tempDate';
import { AddGroup } from '../../../../reduxStore/groups';

// type
type SchedulePageParams = {
  id: string
}
type SchedulePageProps = {}

export const SchedulePage: React.FC<SchedulePageProps> = (props) => {
  const id = useParams<SchedulePageParams>().id;
  const [group, setGroup] = useState<DetailedGroup>();
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const history = useHistory();
  const dispatch = useDispatch();

  const detailed = useServer(GetDetailedGroup);

  useEffect(() => {
    detailed.fetch({
      id: Number(id)
    });
  }, []);

  const success = detailed.state.answer.succeeded;

  useEffect(() => {
    if (success) {
      setGroup(detailed.state.answer.data!);

      dispatch(AddGroup(detailed.state.answer.data!));

      detailed.reload();
    }
  }, [success]);

  const toShow = group?.tasks.map(task => (
    <ShedulePageLink to={`/schedule/${id}/${task.date}`} key={task.date}>
      <h3>{task.date}</h3>
    </ShedulePageLink>
  ));

  return (
    <div>
      {toShow}
      <div>
        {open && (
          <div>
            <div>
              <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
                <DatePicker
                  color="primary"
                  label="выбирите время"
                  value={selectedDate}
                  onChange={(date) => setSelectedDate(date as any)}
                  fullWidth
                />
              </MuiPickersUtilsProvider>
            </div>
            <div>
              <IconButton 
                color="primary"
                onClick={() => {
                  if (selectedDate) {
                    dispatch(SetTemp(selectedDate));
                    history.push(`/schedule/${id}/temp`);
                  }
                }}
              >
                <Check />
              </IconButton>
            </div>
          </div>
        )}
      </div>

      <div style={{ marginTop: 20 }}>
        <Button onClick={() => setOpen(old => !old)}>
          {open ? 'Скрыть' : 'Добавить'}
        </Button>
      </div>

    </div>
  );
};