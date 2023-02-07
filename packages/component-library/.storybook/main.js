const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@atoms': path.resolve(__dirname, '../src/atoms'),
      '@molecules': path.resolve(__dirname, '../src/molecules'),
      '@organisms': path.resolve(__dirname, '../src/organisms'),
      '@templates': path.resolve(__dirname, '../src/templates')
    }

    return config
  }
}
