module.exports = {
  testMatch: ['**/tests/**/*.test.(ts|tsx)'],
  transform: {
    '\\.(ts|tsx)$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic'
            }
          }
        }
      }
    ]
  },
  silent: false,
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jsdom'
}
