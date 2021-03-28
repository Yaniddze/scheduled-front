import { FC } from "react";

import {
    LoginForm,
    LoginFormType,
} from '../ui';

export const LoginPage: FC = () => {
    const handleSubmit = (data: LoginFormType) => {
        console.log(data);
    }

    return (
        <LoginForm onSubmit={handleSubmit} />
    );
}