import React from 'react';
import Button from '../src/components/Button';
import { MoreHoriz } from '@material-ui/icons';
import IconButton from '../src/components/IconButton';

export default {
  title: 'Button',
};

export const primaryButton = () => (
  <Button color="primary" title={'Tooltip'} onClick={() => alert('test')}>
    Button
  </Button>
);
export const primaryDisabledButton = () => (
  <Button
    color="primary"
    title={'Tooltip'}
    disabled
    onClick={() => alert('test')}
  >
    Button
  </Button>
);

export const primaryWhiteButton = () => <Button color="white">Button</Button>;

export const primaryWhiteDisabledButton = () => (
  <Button color="white" disabled>
    Button
  </Button>
);
export const secondaryButton = () => <Button color="secondary">Button</Button>;

export const secondaryDisabledButton = () => (
  <Button color="secondary" disabled>
    Button
  </Button>
);
export const primaryIconButton = () => (
  <IconButton color="primary" title="Text">
    <MoreHoriz />
  </IconButton>
);
