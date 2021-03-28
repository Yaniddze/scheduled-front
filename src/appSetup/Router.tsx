import { FC } from "react";
import { Switch, Redirect, Route } from 'react-router-dom';

import {
    LoginPage,
} from '../components';

import {
    SecureRoute,
} from './SecureRoute';

type AppRoutesPropTypes = {
    children?: never;
}

export const AppRoutes: FC<AppRoutesPropTypes> = () => (
    <Switch>
        <SecureRoute to="/">
            <div>
                123123
            </div>
        </SecureRoute>

        <Route path="/login">
            <LoginPage />
        </Route>

        <Redirect to="/" />
    </Switch>
)