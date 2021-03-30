import { Box, Button, CircularProgress, TextField } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { AppCard } from '../../../ui/layout';

type CreateGroupePageProps = {}

export const CreateGroupePage: React.FC<CreateGroupePageProps> = (props) => {
  const [group, setGroup] = useState('');
  const [error, setError] = useState(false);
  const appHistory = useHistory();
  const [loading, setLoading] = useState(false);

  const enterHandle = () => {
    if (!group) return setError(true);

    // вход

    setLoading(true);

    setTimeout(() => {
      appHistory.push('/schedule');
    }, 1500);
  };

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
              Войти
            </Button>
          </Box>
        </>
      }

    </AppCard>
  );
};