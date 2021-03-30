import React from 'react';
import { AppCardBody } from './styled';

type AppCardProps = {}

export const AppCard: React.FC<AppCardProps> = ({
  children
}) => {
 return (
  <AppCardBody>
    {children}
  </AppCardBody>
 );
};