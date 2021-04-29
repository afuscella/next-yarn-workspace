const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@afuscella/commons']);

module.exports = withPlugins([withTM], {
  trailingSlash: true,
});
