import { Box, Card, Divider, FormControlLabel, Switch } from "@material-ui/core";
import { FC, useState, useEffect } from "react";

import {
    LoginForm,
    LoginFormType,
} from '../../ui';
import { RegistrationForm, RegistrationFormType } from "../../ui/auth/registrationForm";
import { AuthPageContent } from "./styled";
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import { useAccessToken, useServer } from '../../../hooks';

import { Login, Register } from '../../../server';

export const LoginPage: FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const { setToken } = useAccessToken();
    const login = useServer(Login);
    const register = useServer(Register);

    const loading = login.state.fetching || register.state.fetching;

    const loginSuccess = !loading && login.state.answer.succeeded;
    const registerSuccess = !loading && register.state.answer.succeeded;

    useEffect(() => {
        if (loginSuccess) {
            setToken(login.state.answer.data!.token);
            login.reload();
        }

        if (registerSuccess) {
            setToken(register.state.answer.data!.token);
            register.reload();
        }
    }, [loginSuccess, registerSuccess]);

    const loginHandle = (data: LoginFormType) => {
        login.fetch({
            username: data.login,
            password: data.password,
        });
    }

    const registerHandle = (data: RegistrationFormType) => {
        register.fetch({
            username: data.login,
            password: data.password,
        })
    }

    const formToggleHandle = (_: React.ChangeEvent<HTMLInputElement>, isLogin: boolean) => setIsLogin(isLogin);

    return (
        <AuthPageContent>
            <SwitchTransition>
                <CSSTransition
                    key={isLogin ? "login" : "registration"}
                    addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                    classNames='fade'
                >
                    {isLogin ?
                        <LoginForm onSubmit={loginHandle} /> :
                        <RegistrationForm onSubmit={registerHandle} />
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