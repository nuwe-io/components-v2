import { username2Url } from '../../src/functions'

describe('username2Url', () => {
  it('should return a valid twitter url', () => {
    expect(username2Url('username', 'twitter')).toBe('https://twitter.com/username')
  })

  it('should return a valid github url', () => {
    expect(username2Url('username', 'github')).toBe('https://github.com/username')
  })

  it('should return a valid linkedin url', () => {
    expect(username2Url('username', 'linkedin')).toBe('https://linkedin.com/in/username')
  })

  it('should return a valid twitter url from url', () => {
    expect(username2Url('https://twitter.com/username', 'twitter')).toBe(
      'https://twitter.com/username'
    )
  })

  it('should return a valid github url from url', () => {
    expect(username2Url('https://github.com/username', 'github')).toBe(
      'https://github.com/username'
    )
  })

  it('should return a valid linkedin url from url', () => {
    expect(username2Url('https://linkedin.com/in/username', 'linkedin')).toBe(
      'https://linkedin.com/in/username'
    )
  })

  it('should return false for an invalid url', () => {
    expect(username2Url('username', 'invalid')).toBe(false)
  })
})
