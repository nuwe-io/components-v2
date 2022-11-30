import { checkSocialUrl } from '../../src/functions'

describe('checkSocialUrl', () => {
  it('should return true for a valid twitter url', () => {
    expect(checkSocialUrl('https://twitter.com/username')).toBe(true)
  })

  it('should return false for an invalid twitter url', () => {
    expect(checkSocialUrl('https://twitterg.com/username')).toBe(false)
  })
})
