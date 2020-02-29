import { Box, ButtonBaseActions } from '@material-ui/core';
import MuiButton from '@material-ui/core/Button';
import * as React from 'react';

export interface ButtonProps {
  color: 'primary' | 'secondary' | 'white';
  title?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  action?: (instance: ButtonBaseActions | null) => void;
  type?: 'button' | 'reset' | 'submit';
}

const Button: React.FC<ButtonProps> = ({ color, title, children, ...rest }) => {
  return (
    <Box px={{ xs: 4, md: 3 }} py={{ xs: 1.5, md: 1 }} clone={true}>
      <MuiButton
        color={color === 'white' ? 'primary' : color}
        variant={color === 'white' ? 'outlined' : 'contained'}
        {...rest}
      >
        {children}
      </MuiButton>
    </Box>
  );
};

export default Button;
