import { FC, ReactElement } from "react";
import styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom';
import {
    Face,
    AccountCircle,
} from '@material-ui/icons';

import { Container } from '../container';

type NavbarProps = {
    children?: never
}

const Wrapper = styled.div`
    background: ${(props) => props.theme.colors.background.header.color};
    color: ${(props) => props.theme.colors.background.header.contrast};

    > * {
        height: 100%;
        > * {
            height: 100%;
        }
    }
`;

const NavbarWrapper = styled.div`
    display: flex;
    margin: auto 0;

    > div {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
`;

const LinkWrapper = styled.div`
    margin: auto 0;

    > * {
        color: ${(props) => props.theme.colors.background.header.contrast};
        text-decoration: none;
        display: flex;
        text-align: center;

        > * {
            margin: auto 0;
        }
    }
`

export const Navbar: FC<NavbarProps> = () => {
    const location = useLocation();
    
    return (
        <Wrapper>
            <Container>
                <NavbarWrapper>
                    <div>

                        <Route
                            currentRoute={location.pathname}
                            route="/groups"
                        >
                            <>
                                <Face /> <span>Группы</span>
                            </>
                        </Route>

                        <Route
                            currentRoute={location.pathname}
                            route="/account"
                        >
                            <>
                                <AccountCircle /> <span>Аккаунт</span>
                            </>
                        </Route>

                    </div>
                </NavbarWrapper>
            </Container>
        </Wrapper>
    );
}

type RouteProps = {
    children: ReactElement;
    currentRoute: string;
    route: string;
}

const Route: FC<RouteProps> = ({
    children,
    currentRoute,
    route
}: RouteProps) => (
    <LinkWrapper>
        {currentRoute === route ? <div>{children}</div> : <Link to={route}> {children} </Link>}
    </LinkWrapper>
)