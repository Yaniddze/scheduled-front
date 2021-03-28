import { FC } from "react";
import styled from 'styled-components';

type FooterTypes = {
    children?: never
}

const Wrapper = styled.div`
    background: ${(props) => props.theme.colors.background.footer.color};
    color: ${(props) => props.theme.colors.background.footer.contrast};
`;

export const Footer: FC<FooterTypes> = () => (
    <Wrapper>
        Footer
    </Wrapper>
)