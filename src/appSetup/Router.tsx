import { FC } from "react";
import { Switch, Redirect, Route } from 'react-router-dom';

import {
  EnterGroupPage,
  LoginPage, SchedulePage, SheduleDayPage, CreateGroupePage, AccountPage
} from '../components';
import { GroupsPage } from "../components/pages/Schedule/GroupsPage";

import {
  Secure,
} from './SecureRoute';

type AppRoutesPropTypes = {
  children?: never;
}

export const AppRoutes: FC<AppRoutesPropTypes> = () => (
  <Switch>

    {/* <Route path="/" exact>
      <ApplicationSecure>
        <div>
          main
        </div>
      </ApplicationSecure>
    </Route> */}

    <Route path="/schedule" exact>
      <ApplicationSecure>
        <GroupsPage />
      </ApplicationSecure>
    </Route>

    <Route path="/account" exact>
      <ApplicationSecure>
        <AccountPage />
      </ApplicationSecure>
    </Route>
    
    <Route path="/login" exact>
      <LoginSecure>
        <LoginPage />
      </LoginSecure>
    </Route>

    <Route path="/schedule/add" exact>
      <ApplicationSecure>
        <EnterGroupPage />
      </ApplicationSecure>
    </Route>

    <Route path="/schedule/create" exact>
      <ApplicationSecure>
        <CreateGroupePage />
      </ApplicationSecure>
    </Route>

    <Route path="/schedule/:id" exact>
      <ApplicationSecure>
        <SchedulePage />
      </ApplicationSecure>
    </Route>

    <Route path="/schedule/:id/:day" exact>
      <ApplicationSecure>
        <SheduleDayPage />
      </ApplicationSecure>
    </Route>


    <Redirect to="/schedule" />
  </Switch>
);

export const appValidation = (tokenToCheck: string) => tokenToCheck.length > 0;
export const loginValidation = (tokenToCheck: string) => tokenToCheck.length === 0;

type SecureProps = {
  children: JSX.Element,
}

export const ApplicationSecure: FC<SecureProps> = (props) => (
  <Secure validation={appValidation} redirect="/login">
    {props.children}
  </Secure>
);

export const LoginSecure: FC<SecureProps> = (props) => (
  <Secure validation={loginValidation} redirect="/">
    {props.children}
  </Secure>
);