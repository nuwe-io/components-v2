const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules']

    config.resolve.alias = {
      ...config.resolve.alias,
      core: path.resolve(__dirname, '../src/core'),
      layouts: path.resolve(__dirname, '../src/layouts'),
      configs: path.resolve(__dirname, '../src/configs'),
      context: path.resolve(__dirname, '../src/context')
    }

    return config
  }
}
