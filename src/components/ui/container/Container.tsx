import { FC, ReactElement } from 'react';
import { Container as MuiContainer } from '@material-ui/core';

type ContainerProps = {
    children: ReactElement
}

export const Container: FC<ContainerProps> = ({
    children
}: ContainerProps) => (
    <MuiContainer maxWidth="lg">
        {children}
    </MuiContainer>
)