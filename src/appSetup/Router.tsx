import { FC } from "react";
import { Switch, Redirect, Route } from 'react-router-dom';

type AppRoutesPropTypes = {
    children?: never;
}

export const AppRoutes: FC<AppRoutesPropTypes> = () => (
    <Switch>
        <Route path="/">
            <div>
                123123
            </div>
        </Route>

        <Redirect to="/" />
    </Switch>
)