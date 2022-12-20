import { renderHook } from '@testing-library/react'
import { useWindowDimensions } from '../src/useWindowDimensions'

let windowSpy

beforeEach(() => {
  windowSpy = jest.spyOn(window, 'window', 'get')
})

afterEach(() => {
  windowSpy.mockRestore()
})

describe('useWindowDimensions', () => {
  it('should return window dimensions', () => {
    windowSpy.mockImplementation(() => ({
      innerWidth: 100,
      innerHeight: 200
    }))
    const timeout = setTimeout(() => {
      const { result } = renderHook(() => useWindowDimensions())
      expect(result.current.width).toBe(100)
      expect(result.current.height).toBe(200)
      expect(result.current.isVertical).toBe(false)
      expect(result.current.isSmall).toBe(null)
      expect(result.current.isMedium).toBe(null)
      expect(result.current.isLoading).toBe(false)
    })

    clearTimeout(timeout)
  })

  it('should return window dimensions when window is resized', () => {
    windowSpy.mockImplementation(() => ({
      innerWidth: 100,
      innerHeight: 200
    }))
    const timeout = setTimeout(() => {
      const { result } = renderHook(() => useWindowDimensions())
      expect(result.current.width).toBe(100)
      expect(result.current.height).toBe(200)
      expect(result.current.isVertical).toBe(false)
      expect(result.current.isSmall).toBe(null)
      expect(result.current.isMedium).toBe(null)
      expect(result.current.isLoading).toBe(false)

      windowSpy.mockImplementation(() => ({
        innerWidth: 200,
        innerHeight: 100
      }))

      window.dispatchEvent(new Event('resize'))

      expect(result.current.width).toBe(200)
      expect(result.current.height).toBe(100)
      expect(result.current.isVertical).toBe(true)
      expect(result.current.isSmall).toBe(null)
      expect(result.current.isMedium).toBe(null)
      expect(result.current.isLoading).toBe(false)
    })

    clearTimeout(timeout)
  })

  it('should return window dimensions when window is resized and maxWidthSm is set', () => {
    windowSpy.mockImplementation(() => ({
      innerWidth: 100,
      innerHeight: 200
    }))
    const timeout = setTimeout(() => {
      const { result } = renderHook(() => useWindowDimensions(100))
      expect(result.current.width).toBe(100)
      expect(result.current.height).toBe(200)
      expect(result.current.isVertical).toBe(false)
      expect(result.current.isSmall).toBe(true)
      expect(result.current.isMedium).toBe(null)
      expect(result.current.isLoading).toBe(false)

      windowSpy.mockImplementation(() => ({
        innerWidth: 200,
        innerHeight: 100
      }))

      window.dispatchEvent(new Event('resize'))

      expect(result.current.width).toBe(200)
      expect(result.current.height).toBe(100)
      expect(result.current.isVertical).toBe(true)
      expect(result.current.isSmall).toBe(false)
      expect(result.current.isMedium).toBe(null)
      expect(result.current.isLoading).toBe(false)
    })

    clearTimeout(timeout)
  })

  it('should return window dimensions when window is resized and maxWidthMd is set', () => {
    windowSpy.mockImplementation(() => ({
      innerWidth: 100,
      innerHeight: 200
    }))
    const timeout = setTimeout(() => {
      const { result } = renderHook(() => useWindowDimensions(null, 100))
      expect(result.current.width).toBe(100)
      expect(result.current.height).toBe(200)
      expect(result.current.isVertical).toBe(false)
      expect(result.current.isSmall).toBe(null)
      expect(result.current.isMedium).toBe(true)
      expect(result.current.isLoading).toBe(false)

      windowSpy.mockImplementation(() => ({
        innerWidth: 200,
        innerHeight: 100
      }))

      window.dispatchEvent(new Event('resize'))

      expect(result.current.width).toBe(200)
      expect(result.current.height).toBe(100)
      expect(result.current.isVertical).toBe(true)
      expect(result.current.isSmall).toBe(null)
      expect(result.current.isMedium).toBe(false)
      expect(result.current.isLoading).toBe(false)
    })

    clearTimeout(timeout)
  })

  it('should return window dimensions when window is resized and maxWidthSm and maxWidthMd are set', () => {
    windowSpy.mockImplementation(() => ({
      innerWidth: 100,
      innerHeight: 200
    }))
    const timeout = setTimeout(() => {
      const { result } = renderHook(() => useWindowDimensions(100, 200))
      expect(result.current.width).toBe(100)
      expect(result.current.height).toBe(200)
      expect(result.current.isVertical).toBe(false)
      expect(result.current.isSmall).toBe(true)
      expect(result.current.isMedium).toBe(true)
      expect(result.current.isLoading).toBe(false)

      windowSpy.mockImplementation(() => ({
        innerWidth: 200,
        innerHeight: 100
      }))

      window.dispatchEvent(new Event('resize'))

      expect(result.current.width).toBe(200)
      expect(result.current.height).toBe(100)
      expect(result.current.isVertical).toBe(true)
      expect(result.current.isSmall).toBe(false)
      expect(result.current.isMedium).toBe(false)
      expect(result.current.isLoading).toBe(false)
    })

    clearTimeout(timeout)
  })

  it('should return window dimensions when window is resized and maxWidthSm and maxWidthMd are set and maxWidthSm is greater than maxWidthMd', () => {
    windowSpy.mockImplementation(() => ({
      innerWidth: 100,
      innerHeight: 200
    }))
    const timeout = setTimeout(() => {
      const { result } = renderHook(() => useWindowDimensions(200, 100))
      expect(result.current.width).toBe(100)
      expect(result.current.height).toBe(200)
      expect(result.current.isVertical).toBe(false)
      expect(result.current.isSmall).toBe(true)
      expect(result.current.isMedium).toBe(true)
      expect(result.current.isLoading).toBe(false)

      windowSpy.mockImplementation(() => ({
        innerWidth: 200,
        innerHeight: 100
      }))

      window.dispatchEvent(new Event('resize'))

      expect(result.current.width).toBe(200)
      expect(result.current.height).toBe(100)
      expect(result.current.isVertical).toBe(true)
      expect(result.current.isSmall).toBe(false)
      expect(result.current.isMedium).toBe(false)
      expect(result.current.isLoading).toBe(false)
    })

    clearTimeout(timeout)
  })

  it('should return window dimensions when window is resized and maxWidthSm and maxWidthMd are set and maxWidthSm is equal to maxWidthMd', () => {
    windowSpy.mockImplementation(() => ({
      innerWidth: 100,
      innerHeight: 200
    }))
    const timeout = setTimeout(() => {
      const { result } = renderHook(() => useWindowDimensions(100, 100))
      expect(result.current.width).toBe(100)
      expect(result.current.height).toBe(200)
      expect(result.current.isVertical).toBe(false)
      expect(result.current.isSmall).toBe(true)
      expect(result.current.isMedium).toBe(true)
      expect(result.current.isLoading).toBe(false)

      windowSpy.mockImplementation(() => ({
        innerWidth: 200,
        innerHeight: 100
      }))

      window.dispatchEvent(new Event('resize'))

      expect(result.current.width).toBe(200)
      expect(result.current.height).toBe(100)
      expect(result.current.isVertical).toBe(true)
      expect(result.current.isSmall).toBe(false)
      expect(result.current.isMedium).toBe(false)
      expect(result.current.isLoading).toBe(false)
    })

    clearTimeout(timeout)
  })

  it('should return window dimensions when window is resized and maxWidthSm and maxWidthMd are set and maxWidthSm is less than maxWidthMd', () => {
    windowSpy.mockImplementation(() => ({
      innerWidth: 100,
      innerHeight: 200
    }))
    const timeout = setTimeout(() => {
      const { result } = renderHook(() => useWindowDimensions(50, 100))
      expect(result.current.width).toBe(100)
      expect(result.current.height).toBe(200)
      expect(result.current.isVertical).toBe(false)
      expect(result.current.isSmall).toBe(true)
      expect(result.current.isMedium).toBe(true)
      expect(result.current.isLoading).toBe(false)

      windowSpy.mockImplementation(() => ({
        innerWidth: 200,
        innerHeight: 100
      }))

      window.dispatchEvent(new Event('resize'))

      expect(result.current.width).toBe(200)
      expect(result.current.height).toBe(100)
      expect(result.current.isVertical).toBe(true)
      expect(result.current.isSmall).toBe(false)
      expect(result.current.isMedium).toBe(false)
      expect(result.current.isLoading).toBe(false)
    })

    clearTimeout(timeout)
  })
})
