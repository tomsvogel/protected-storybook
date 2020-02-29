const path = require('path');

module.exports = {
  addons: [
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: [/\.stories\.tsx?$/],
          include: [path.resolve(__dirname, '../src')],
        },
        loaderOptions: {
          prettierConfig: {printWidth: 80, singleQuote: false},
        },
      },
    },
    '@storybook/addon-viewport/register',
  ],
};
