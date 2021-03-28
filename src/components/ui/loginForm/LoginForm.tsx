import { FC } from "react";
import { useForm } from 'react-hook-form'
import {
    TextField,
} from '@material-ui/core';

import {
    Button,
} from '../button';

export type LoginFormType = {
    login: string
    password: string
    repeatPassword: string
}

type LoginFormProps = {
    children?: never
    onSubmit: (data: LoginFormType) => void
}

export const LoginForm: FC<LoginFormProps> = ({
    onSubmit,
}: LoginFormProps) => {
    const {
        register,
        handleSubmit,
        errors
    } = useForm<LoginFormType>();

    return (
        <div>
            <div>
                <TextField 
                    name="login"
                    inputRef={register({
                        required: {
                            value: true,
                            message: 'Это поле обязательно'
                        }
                    })}
                    label="Логин"
                />
            </div>
            <div>
                <Button onClick={handleSubmit(onSubmit)}>
                    Войти
                </Button>
            </div>
        </div>
    )
}