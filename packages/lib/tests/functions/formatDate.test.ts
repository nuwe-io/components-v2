import { formatDate } from '../../src/functions'

describe('formatDate', () => {
  it('should return a formatted date', () => {
    const date = new Date('2022-12-31')
    expect(formatDate(date)).toBe('31 / 12 / 2022')
  })

  it('should return a NaN date for an invalid date', () => {
    const date = new Date('invalid')
    expect(formatDate(date)).toBe('NaN / NaN / NaN')
  })
})
