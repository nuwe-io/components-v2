import { uniqueObjArr } from '../../src/functions'

describe('uniqueObjArr', () => {
  it('should return unique array', () => {
    const arr = [
      { id: 1, name: 'test' },
      { id: 2, name: 'test' },
      { id: 3, name: 'test' }
    ]
    const result = uniqueObjArr(arr, 'name')
    expect(result).toEqual([{ id: 1, name: 'test' }])
  })
})
