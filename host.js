const protect = require('static-auth');
const app = protect('/', (user, pass) => user === 'vkw' && pass === 'porsche', {
  directory: __dirname + '/storybook-static',
});

module.exports = app;
