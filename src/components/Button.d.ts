import { ButtonBaseActions } from '@material-ui/core';
import * as React from 'react';
export interface ButtonProps {
    color: 'primary' | 'secondary' | 'white';
    title?: string;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    action?: (instance: ButtonBaseActions | null) => void;
    type?: 'button' | 'reset' | 'submit';
}
declare const Button: React.FC<ButtonProps>;
export default Button;
