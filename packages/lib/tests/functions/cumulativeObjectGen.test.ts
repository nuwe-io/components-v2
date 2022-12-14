import { cumulativeObjectGen } from '../../src/functions'

describe('cumulativeObjectGen', () => {
  it('should return a cumulative object', () => {
    const routes = ['business']
    const cumulativeObject = cumulativeObjectGen(routes, 'home')
    expect(cumulativeObject).toEqual([{ href: '/business', name: 'home' }])
  })

  it('should return a cumulative object with a nested route', () => {
    const routes = ['business', 'company']
    const cumulativeObject = cumulativeObjectGen(routes, 'home')
    expect(cumulativeObject).toEqual([
      { href: '/business', name: 'home' },
      { href: '/business/company', name: 'company' }
    ])
  })

  it('should return a empty cumulative object', () => {
    const routes = []
    const cumulativeObject = cumulativeObjectGen(routes, 'home')
    expect(cumulativeObject).toEqual([])
  })
})
