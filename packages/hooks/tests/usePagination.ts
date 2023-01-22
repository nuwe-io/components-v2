// Unit Test Code
import { act, renderHook } from '@testing-library/react-hooks'
import { useMuiPagination } from '../src'

describe('useMuiPagination', () => {
  it('should return correct initial state', () => {
    const { result } = renderHook(() => useMuiPagination())

    expect(result.current.pagination).toEqual({
      pageCount: 0,
      currentPage: 0,
      count: 10,
      loading: true
    })

    expect(result.current.serverSidePagination).toEqual({
      paginationMode: 'server',
      page: 0,
      rowCount: 10,
      pagination: true
    })

    expect(typeof result.current.initPagination).toBe('function')

    expect(typeof result.current.updatePage).toBe('function')

    expect(typeof result.current.stopLoadingPaginationChange).toBe('function')
  })

  it('should update the state correctly when initPagination is called', () => {
    const initData = { pageCount: 3, currentPage: 1, count: 20 }

    const { result } = renderHook(() => useMuiPagination())

    act(() => {
      result.current.initPagination(initData)
    })

    expect(result.current.pagination).toEqual({ ...initData, loading: false })
  })

  it('should update the state correctly when updatePage is called', () => {
    const newPage = 2

    const { result } = renderHook(() => useMuiPagination())

    act(() => {
      result.current.updatePage(newPage)
    })

    expect(result.current.pagination).toEqual({
      ...result.current.pagination,
      currentPage: newPage,
      loading: true
    })
  })
})
