// Unit test code
import { filter } from '../../src/functions'

describe('filter', () => {
  it('should return an array of elements that satisfy the condition', () => {
    const arr = [1, 2, 3, 4, 5]
    const fn = (e: number) => e % 2 === 0

    expect(filter(fn, arr)).toEqual([2, 4])
  })

  it('should return an empty array if no elements satisfy the condition', () => {
    const arr = [1, 3, 5]
    const fn = (e: number) => e % 2 === 0

    expect(filter(fn, arr)).toEqual([])
  })

  it('should return the same array if all elements satisfy the condition', () => {
    const arr = [2, 4, 6]
    const fn = (e: number) => e % 2 === 0

    expect(filter(fn, arr)).toEqual([2, 4, 6])
  })
})
