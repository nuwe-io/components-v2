import { getQuery } from '../../src/functions'

let windowSpy

beforeEach(() => {
  windowSpy = jest.spyOn(window, 'window', 'get')
})

afterEach(() => {
  windowSpy.mockRestore()
})

describe('getQuery', () => {
  it('should return a query value', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        href: 'https://example.com/?key=value'
      }
    }))
    expect(getQuery('key')).toBe('value')
  })

  it('should return undefined for an invalid query', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        href: 'https://example.com/?key=value'
      }
    }))
    expect(getQuery('invalid')).toBe(undefined)
  })

  it('should return null for an invalid window', () => {
    windowSpy.mockImplementation(() => undefined)
    expect(getQuery('key')).toBe(null)
  })

  it('should return null for an invalid window location', () => {
    windowSpy.mockImplementation(() => ({
      location: undefined
    }))
    expect(getQuery('key')).toBe(null)
  })

  it('should return null for an invalid window location href', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        href: undefined
      }
    }))
    expect(getQuery('key')).toBe(null)
  })

  it('should return undefined for an invalid window location href query', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        href: 'https://example.com/'
      }
    }))
    expect(getQuery('key')).toBe(undefined)
  })
})
