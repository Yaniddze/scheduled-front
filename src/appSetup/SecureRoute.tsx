import { FC, ReactElement } from "react";
import { useSelector } from 'react-redux';
import { Redirect, Route } from "react-router";
import { RootState } from "../reduxStore";

type SecurePageProps = {
    children: ReactElement
    to: string
}

export const SecureRoute: FC<SecurePageProps> = ({
    children, 
    to,
}: SecurePageProps) => {
    const accessToken = useSelector((x: RootState) => x.token);

    return (
        <Route path={to}>
            {accessToken === '' ? <Redirect to="/login" /> : children}
        </Route>
    );
}   