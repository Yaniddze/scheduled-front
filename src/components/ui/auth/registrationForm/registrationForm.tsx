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
  error: string
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  onSubmit, error
}) => {
  const {
    register,
    handleSubmit,
    errors,
    getValues,
  } = useForm<RegistrationFormType>();

  return (
    <FormCard>
      <Typography align="center" variant="h4">
        Регистрация
      </Typography>

      <div style={{ color: 'red' }}>
          {error}
      </div>

      <InputGroup>
        <TextField
          name="login"
          inputRef={register({
            required: {
              value: true,
              message: 'Это поле обязательно'
            },
            minLength: {
              value: 4,
              message: 'Минимальная длинна поля - 4 символа'
            },
            maxLength: {
              value: 20,
              message: 'Максимальная длинна поля - 20 символов'
            },
          })}
          label="Логин"
          fullWidth
          error={!!errors.login}
          helperText={errors.login?.message}
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
            },
            minLength: {
              value: 4,
              message: 'Минимальная длинна поля - 4 символа'
            },
            maxLength: {
              value: 20,
              message: 'Максимальная длинна поля - 20 символов'
            },
          })}
          label="пароль"
          fullWidth
          error={!!errors.password}
          helperText={errors.password?.message}
        />
      </InputGroup>

      <InputGroup>
        <TextField
          name="repeatPassword"
          type="password"
          inputRef={register({
            required: {
              value: true,
              message: 'Это поле обязательно'
            },
            validate: (pass: string) => getValues().password === pass ? true : 'Пароли должны совпадать',
          })}
          label="Повторите пароль"
          fullWidth
          error={!!errors.repeatPassword}
          helperText={errors.repeatPassword?.message}
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