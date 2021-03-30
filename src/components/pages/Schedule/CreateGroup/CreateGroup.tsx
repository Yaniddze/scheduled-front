import { Box, Button, CircularProgress, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useServer } from '../../../../hooks';
import { AppCard } from '../../../ui/layout';
import { CreateGroup } from '../../../../server';

type CreateGroupePageProps = {}

export const CreateGroupePage: React.FC<CreateGroupePageProps> = (props) => {
  const [group, setGroup] = useState('');
  const [error, setError] = useState(false);
  const appHistory = useHistory();

  const createRequest = useServer(CreateGroup);
  const createLoading = createRequest.state.fetching;
  const createSuccess = !createLoading && createRequest.state.answer.succeeded;

  const loading = createLoading;

  const enterHandle = () => {
    if (!group) return setError(true);

    // вход
    createRequest.fetch({
      name: group
    });
  };

  if(createSuccess) {
    appHistory.push('/schedule');

    createRequest.reload();
  }

  return (
    <AppCard>
      <h3>Создание группы</h3>

      {loading &&
        <>
          <CircularProgress color="primary" />
        </>
      }

      {!loading &&
        <>
          <TextField
            value={group}
            onChange={(e) => {
              setGroup(e.target.value);
            }}
            id="standard-basic"
            label="название группы"
            error={error}
            helperText={error && "поле обязательно"}
            fullWidth />

          <Box mt={2}>
            <Button variant="contained" color="primary" onClick={enterHandle}>
              Создать
            </Button>
          </Box>
        </>
      }

    </AppCard>
  );
};