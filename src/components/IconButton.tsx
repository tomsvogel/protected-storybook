import { makeStyles } from '@material-ui/core';
import MuiButton from '@material-ui/core/Button';
import * as React from 'react';
import { ButtonProps } from './Button';

const useStyles = makeStyles(theme => ({
  iconButton: {
    '&&': {
      minWidth: 48,
      minHeight: 48,
      padding: 0,
      [theme.breakpoints.up('md')]: {
        minWidth: 40,
        minHeight: 40,
      },
    },
  },
}));

const IconButton: React.FC<ButtonProps> = ({
  color,
  title,
  children,
  disabled,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <MuiButton
      color={color === 'white' ? 'primary' : color}
      className={classes.iconButton}
      variant={color === 'white' ? 'outlined' : 'contained'}
      disabled={!!disabled}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};

export default IconButton;
