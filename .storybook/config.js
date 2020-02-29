import {addDecorator, addParameters, configure} from '@storybook/react';
import StylesDecorator from './styles-decorator';

addDecorator(StylesDecorator);

addParameters({
  viewport: {
    viewports: {
      small: {
        name: 'small',
        type: 'mobile',
        styles: {
          width: '320px',
          height: '100%',
        },
      },
      medium: {
        name: 'medium',
        type: 'tablet',
        styles: {
          width: '640px',
          height: '100%',
        },
      },
      large: {
        name: 'large',
        type: 'desktop',
        styles: {
          width: '1024px',
          height: '100%',
        },
      },
    },
    defaultViewport: 'responsive',
  },
});

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.(js|ts)x?$/), module);
