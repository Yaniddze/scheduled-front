import { FC } from "react";
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { Container } from '../container';

type NavbarProps = {
    children?: never
}

const Wrapper = styled.div`
    background: ${(props) => props.theme.colors.background.header.color};
    color: ${(props) => props.theme.colors.background.header.contrast};
`;

export const Navbar: FC<NavbarProps> = () => {
    const location = useLocation();
    
    return (
        <Wrapper>
            <Container>
                <div>
                    Nav bar
                </div>
            </Container>
        </Wrapper>
    );
}