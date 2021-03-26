import { FC } from "react";

import {
    Button as MuiButton,
} from '@material-ui/core';

type ButtonProps = {
    children: string
    variant?: 'text' | 'outlined' | 'contained'
    color?: 'primary' | 'secondary'
    onClick?: () => void
}

export const Button: FC<ButtonProps> = ({
    variant,
    color,
    onClick,
    children,
}) => (
    <MuiButton
        variant={variant === undefined ? "contained" : variant}
        color={color === undefined ? "primary" : color}
        onClick={onClick}
    >
        {children}
    </MuiButton>
)