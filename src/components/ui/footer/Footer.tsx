import { FC } from "react";
import styled from 'styled-components';

import { Container } from '../container';

type FooterTypes = {
    children?: never
}

const Wrapper = styled.div`
    background: ${(props) => props.theme.colors.background.footer.color};
    color: ${(props) => props.theme.colors.background.footer.contrast};
`;

export const Footer: FC<FooterTypes> = () => (
    <Wrapper>
        <Container>
            <div>
                Footer
            </div>
        </Container>
    </Wrapper>
)