import { Button, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FormCard } from '../../form';
import { InputGroup } from '../../form/styled';



export type RegistrationFormType = {
  login: string
  password: string
  repeatPassword: string
}

type RegistrationFormProps = {
  children?: never
  onSubmit: (data: RegistrationFormType) => void
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  onSubmit
}) => {
  const {
    register,
    handleSubmit,
    errors
  } = useForm<RegistrationFormType>();

  return (
    <FormCard>
      <Typography align="center" variant="h4">
        Регистрация
      </Typography>

      <InputGroup>
        <TextField
          name="login"
          inputRef={register({
            required: {
              value: true,
              message: 'Это поле обязательно'
            }
          })}
          label="Логин"
          fullWidth
        />
      </InputGroup>

      <InputGroup>
        <TextField
          name="password"
          type="password"
          inputRef={register({
            required: {
              value: true,
              message: 'Это поле обязательно'
            }
          })}
          label="пароль"
          fullWidth
        />
      </InputGroup>

      <InputGroup>
        <TextField
          name="rpassword"
          type="password"
          inputRef={register({
            required: {
              value: true,
              message: 'Это поле обязательно'
            }
          })}
          label="Повторите пароль"
          fullWidth
        />
      </InputGroup>

      <div>
        <Button onClick={handleSubmit(onSubmit)} color="primary" variant="contained">
          Зарегистрироваться
        </Button>
      </div>
    </FormCard>
  );
};