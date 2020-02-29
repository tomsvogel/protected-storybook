import { MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import theme from '../src/themes/theme';
const StylesDecorator = (storyFn: () => React.ReactNode) => {
  return <MuiThemeProvider theme={theme}>{storyFn()}</MuiThemeProvider>;
};
export default StylesDecorator;
