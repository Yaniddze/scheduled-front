import { FC } from "react";
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

type AppRoutesPropTypes = {
    children?: never;
}

export const AppRoutes: FC<AppRoutesPropTypes> = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/">
                <div>
                    123123
                </div>
            </Route>

            <Redirect to="/" />
        </Switch>
    </BrowserRouter>
)