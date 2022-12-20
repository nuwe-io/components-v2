module.exports = {
  testMatch: ['**/tests/**/*.test.ts'],
  transform: {
    '\\.(ts|tsx)$': '@swc/jest'
  },
  testEnvironment: 'jsdom'
}
