import { Button } from '@material-ui/core';
import React from 'react';
import { AppCard } from '../../../ui/layout';

import {
  useAccessToken,
} from '../../../../hooks';

type AccountPageProps = {}

export const AccountPage: React.FC<AccountPageProps> = (props) => {
  const { setToken } = useAccessToken();

  return (
    <AppCard>
      <h3>Аккаунт</h3>

      <Button variant="contained" color="primary" onClick={() => setToken('')}>
        Выйти
      </Button>
    </AppCard>
  );
};