import { Box, Card, Divider, FormControlLabel, Switch } from "@material-ui/core";
import { FC, useState, useEffect } from "react";

import {
    LoginForm,
    LoginFormType,
} from '../../ui';
import { RegistrationForm, RegistrationFormType } from "../../ui/auth/registrationForm";
import { AuthPageContent } from "./styled";
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import { useAccessToken, useServerMutation } from '../../../hooks';

import { Login, Register } from '../../../server';

export const LoginPage: FC = () => {
    const [isLogin, setIsLogin] = useState(true);

    const { setToken } = useAccessToken();

    const { 
        mutate: login, 
        data: loginData, 
        isLoading: loginLoading,
        error: loginError,
    } = useServerMutation('login', Login);

    const { 
        mutate: register, 
        data: registerData, 
        isLoading: registerLoading,
        error: registerError,
    } = useServerMutation('register', Register);

    if (loginData?.token) {
        setToken(loginData.token);
    }

    if (registerData?.token) {
        setToken(registerData.token);
    }

    const loginHandle = (data: LoginFormType) => {
        login({
            username: data.login,
            password: data.password,
        });
    }

    const registerHandle = (data: RegistrationFormType) => {
        register({
            username: data.login,
            password: data.password,
        });
    }

    const formToggleHandle = (_: React.ChangeEvent<HTMLInputElement>, isLogin: boolean) => {
        setIsLogin(isLogin);
    };

    return (
        <AuthPageContent>
            <SwitchTransition>
                <CSSTransition
                    key={isLogin ? "login" : "registration"}
                    addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                    classNames='fade'
                >
                    {isLogin ?
                        <LoginForm onSubmit={loginHandle} error={loginError?.message || ''} /> :
                        <RegistrationForm onSubmit={registerHandle} error={registerError?.message || ''} />
                    }
                </CSSTransition>
            </SwitchTransition>
            <Box marginTop={1} mb={1}>
                <Divider />
            </Box>

            <div className="auth-page__toggler">
                <FormControlLabel
                    control={
                        <Switch
                            checked={isLogin}
                            onChange={formToggleHandle}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                    }
                    label={isLogin? "Зарегистрироваться" : "Войти" }
                />
            </div>
        </AuthPageContent>
    );
}