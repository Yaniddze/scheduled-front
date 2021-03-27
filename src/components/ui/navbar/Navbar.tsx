import { FC } from "react";
import styled from 'styled-components';

type NavbarProps = {
    children?: never
}

const Wrapper = styled.div`
    background: ${(props) => props.theme.colors.background.color};
    color: ${(props) => props.theme.colors.background.contrast};
`;

export const Navbar: FC<NavbarProps> = () => (
    <Wrapper>
        Nav bar
    </Wrapper>
);