const path = require('path');
const custom = require('./webpack.config.js');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // allow for css modules -- overriding storybook default
    config.module.rules = config.module.rules.filter(
      (rule) => rule.test.toString() !== '/\\.css$/'
    );
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    });

    //allow for sass support
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
        {
          loader: require.resolve('sass-resources-loader'),
          options: {
            resources: path.resolve(__dirname, '../src/global/_global.scss')
          }
        }
      ],
      include: path.resolve(__dirname, '../')
    });

    // Return the altered config
    return config;
  }
};
