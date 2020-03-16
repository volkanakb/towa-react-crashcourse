// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');
const { parsed: localEnv } = require('dotenv').config();
const path = require('path');

module.exports = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, 'components'),
      '@styled': path.resolve(__dirname, 'components/styled'),
      '@hooks': path.resolve(__dirname, 'hooks'),
      '@context': path.resolve(__dirname, 'context'),
    };

    return config;
  },
};
