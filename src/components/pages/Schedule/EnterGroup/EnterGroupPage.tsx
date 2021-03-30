import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Box, Button, CircularProgress } from '@material-ui/core';
import { AppCard } from '../../../ui/layout/AppCard/AppCard';
import { useHistory } from 'react-router';
import { JoinGroup } from '../../../../server';
import { useServer } from '../../../../hooks';

type EnterGroupPageProps = {}

export const EnterGroupPage: React.FC<EnterGroupPageProps> = (props) => {
  const [group, setGroup] = useState('');
  const [error, setError] = useState(false);
  const [enterError, setEnterError] = useState('');
  const appHistory = useHistory();

  const enterRequest = useServer(JoinGroup);
  const enterLoading = enterRequest.state.fetching;
  const enterSuccess = !enterLoading && enterRequest.state.answer.succeeded;

  const loading = enterLoading;

  const enterHandle = () => {
    if (!group) return setError(true);

    // вход
    enterRequest.fetch({
      name: group
    });
  };

  if (enterSuccess) {
    appHistory.push('/schedule');
    enterRequest.reload();
  }

  if (!enterRequest.state.answer.succeeded && !loading && enterRequest.state.answer.errorMessage) {
    setEnterError(enterRequest.state.answer.errorMessage);
    enterRequest.reload();
  }


  return (
    <AppCard>
      <h3>Вход в группу</h3>

      {enterError &&
        <Box color="#000" fontSize={18}>
          {enterError}

          <p>Попробуйте снова.</p>
        </Box>
      }

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
              Войти
            </Button>
          </Box>
        </>
      }

    </AppCard>
  );
};