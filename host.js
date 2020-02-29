const protect = require('static-auth');
const app = protect('/', (user, pass) => user === 'admin' && pass === 'pass', {
  directory: __dirname + '/storybook-static',
});

module.exports = app;
