import { isBrowserSide } from '../../src/functions'

let windowSpy

beforeEach(() => {
  windowSpy = jest.spyOn(window, 'window', 'get')
})

afterEach(() => {
  windowSpy.mockRestore()
})

describe('isBrowserSide', () => {
  it('should return true for a browser', () => {
    windowSpy.mockImplementation(() => ({
      location: {}
    }))
    expect(isBrowserSide()).toBe(true)
  })

  it('should return false for a server', () => {
    windowSpy.mockImplementation(() => undefined)
    expect(isBrowserSide()).toBe(false)
  })
})
