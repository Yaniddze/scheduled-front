import { FC } from "react";
import { useForm } from 'react-hook-form'
import {
    TextField, Typography,
} from '@material-ui/core';

import {
    Button,
} from '../../button';
import { FormCard } from "../../form";
import { InputGroup } from "../../form/styled";

export type LoginFormType = {
    login: string
    password: string
}

type LoginFormProps = {
    children?: never
    onSubmit: (data: LoginFormType) => void
    error: string
}

export const LoginForm: FC<LoginFormProps> = ({
    onSubmit, error
}: LoginFormProps) => {
    const {
        register,
        handleSubmit,
        errors
    } = useForm<LoginFormType>();

    return (
        <FormCard>
            <Typography  align="center" variant="h4">
                Вход
            </Typography>

            <div>
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
                            }
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
                            }
                        })}
                        label="пароль"
                        fullWidth
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                </InputGroup>
            </div>
            <div>
                <Button onClick={handleSubmit(onSubmit)} color="primary">
                    Войти
                </Button>
            </div>
        </FormCard>
    )
}