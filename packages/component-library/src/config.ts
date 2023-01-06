const env = {
  development: process.env.NEXT_PUBLIC_LOCALE_API_URL || '',
  production: process.env.NEXT_PUBLIC_API_URL || '',
  test: process.env.NEXT_PUBLIC_API_MOCKING || '/'
}

const TEST_URL =
  process.env.NODE_ENV === 'test' ? process.env.NEXT_PUBLIC_API_MOCKING || '/' : undefined

const URL =
  process.env.NEXT_PUBLIC_MOCKING_MSW === 'enable'
    ? process.env.NEXT_PUBLIC_API_MOCKING || '/'
    : process.env.NODE_ENV
    ? env[process.env.NODE_ENV]
    : ''

const config = {
  BASE_URL: !TEST_URL ? URL : TEST_URL
}

const { BASE_URL } = config

export { BASE_URL }
