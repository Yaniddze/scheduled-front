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

const BodyWrapper = styled.div`
    border-radius: 20px;
    height: 100%;
    width: 100%;
    margin: 10px 0;
`;

export const Main: FC<MainProps> = ({
    children
}: MainProps) => (
    <Wrapper>
        <Container>
            <BodyWrapper>
                {children}
            </BodyWrapper>
        </Container>
    </Wrapper>
)