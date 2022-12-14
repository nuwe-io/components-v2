import { scrollToRef } from '../../src/functions'

describe('scrollToRef', () => {
  it('should scroll to the top of the page', () => {
    const ref = { current: { scrollIntoView: jest.fn() } }
    scrollToRef({ ref })
    expect(ref.current.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'auto',
      block: 'center'
    })
  })

  it('should not scroll to the top of the page', () => {
    const ref = { current: { scrollIntoView: jest.fn() } }
    scrollToRef({ ref: null })
    expect(ref.current.scrollIntoView).not.toHaveBeenCalled()
  })

  it('should not scroll to the top of the page', () => {
    const ref = { current: { scrollIntoView: jest.fn() } }
    scrollToRef({ ref: { current: null } })
    expect(ref.current.scrollIntoView).not.toHaveBeenCalled()
  })

  it('should not scroll to the top of the page', () => {
    const ref = { current: { scrollIntoView: jest.fn() } }
    scrollToRef({ ref: { current: { scrollIntoView: null } } })
    expect(ref.current.scrollIntoView).not.toHaveBeenCalled()
  })

  it('should not scroll to the top of the page', () => {
    const ref = { current: { scrollIntoView: jest.fn() } }
    scrollToRef({ ref: { current: { scrollIntoView: jest.fn() } } })
    expect(ref.current.scrollIntoView).not.toHaveBeenCalled()
  })
})
