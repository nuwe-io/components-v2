import { createdAt } from '../../src/functions'

describe('createdAt', () => {
  it('should return 1d', () => {
    const date = (new Date() as unknown as number) - 1000 * 60 * 60 * 24 * 2 // 1 day ago
    const result = createdAt(date)
    expect(result).toBe('1d')
  })

  it('should return 1h', () => {
    const date = (new Date() as unknown as number) - 1000 * 60 * 60 * 2 // 1 hour ago
    const result = createdAt(date)
    expect(result).toBe('1h')
  })

  it('should return 1m', () => {
    const date = (new Date() as unknown as number) - 1000 * 60 // 1 minute ago
    const result = createdAt(date)
    expect(result).toBe('1m')
  })
})
