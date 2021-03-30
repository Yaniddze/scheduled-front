import { Button } from '@material-ui/core';
import React from 'react';
import { AppCard } from '../../../ui/layout';

type AccountPageProps = {}

export const AccountPage: React.FC<AccountPageProps> = (props) => {
  return (
    <AppCard>
      <h3>Аккаунт</h3>

      <Button variant="contained" color="primary">
        Выйти
      </Button>
    </AppCard>
  );
};