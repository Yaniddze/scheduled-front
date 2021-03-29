import React from 'react';
import { FormCardBody } from './styled';

type FormCardProps = {}

export const FormCard: React.FC<FormCardProps> = (props) => {
 return (
  <FormCardBody>
    {props.children}
  </FormCardBody>
 );
};