import { matchObjects } from '../../src/functions'

describe('matchObjects', () => {
  it('should return array of objects', () => {
    const template = {
      id: 0,
      uuid: ''
    }
    const templateArray = [
      {
        id: 1,
        uuid: 'test'
      }
    ]
    const result = matchObjects(template, templateArray)
    expect(result).toEqual([
      {
        id: 0,
        uuid: 1
      }
    ])
  })

  it('should return array of objects', () => {
    const template = {
      id: 0,
      uuid: ''
    }
    const templateArray = [
      {
        id: 1,
        uuid: 'test'
      },
      {
        id: 2,
        uuid: 'test'
      },
      {
        id: 3,
        uuid: 'test'
      }
    ]
    const result = matchObjects(template, templateArray)
    expect(result).toEqual([
      {
        id: 0,
        uuid: 1
      },
      {
        id: 1,
        uuid: 2
      },
      {
        id: 2,
        uuid: 3
      }
    ])
  })
})
