const path = require('path')

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/layouts/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/layouts/**/*.stories.mdx'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },

  webpackFinal: async (config, { configType }) => {
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
