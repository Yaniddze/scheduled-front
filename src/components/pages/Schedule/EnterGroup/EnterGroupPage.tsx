import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Box, Button, CircularProgress } from '@material-ui/core';
import { AppCard } from '../../../ui/layout/AppCard/AppCard';
import { useHistory } from 'react-router';
import { Skeleton } from '@material-ui/lab';

type EnterGroupPageProps = {}

export const EnterGroupPage: React.FC<EnterGroupPageProps> = (props) => {
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
      {loading &&
        <> 
          <CircularProgress color="primary" />
          <Skeleton variant="rect" width="100%" height={125} animation="wave" />
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