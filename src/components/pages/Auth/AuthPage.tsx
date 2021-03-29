import { Box, Card, Divider, FormControlLabel, Switch } from "@material-ui/core";
import { FC, useState } from "react";

import {
    LoginForm,
    LoginFormType,
} from '../../ui';
import { RegistrationForm, RegistrationFormType } from "../../ui/auth/registrationForm";
import { AuthPageContent } from "./styled";
import { SwitchTransition, CSSTransition } from 'react-transition-group';

export const LoginPage: FC = () => {
    const [isLogin, setIsLogin] = useState(true);

    const loginHandle = (data: LoginFormType) => {

    }

    const registerHandle = (data: RegistrationFormType) => {

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
                        <RegistrationForm onSubmit={loginHandle} />
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