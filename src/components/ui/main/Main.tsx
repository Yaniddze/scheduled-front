import { FC, ReactElement } from "react";
import styled from 'styled-components';

import { Container } from "../container";

type MainProps = {
    children: ReactElement
}

const Wrapper = styled.div`
    background: ${(props) => props.theme.colors.background.main.color};
    color: ${(props) => props.theme.colors.background.main.contrast};
`;

export const Main: FC<MainProps> = ({
    children
}: MainProps) => (
    <Wrapper>
        <Container>
            {children}
        </Container>
    </Wrapper>
)