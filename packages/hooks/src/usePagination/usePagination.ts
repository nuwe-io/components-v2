import { useCallback, useReducer } from 'react'
import { PaginationState } from '../../types'

const paginationReducer = (state: PaginationState, action: any) => {
  switch (action.type) {
    case 'INIT_PAGINATION':
      return { ...state, ...action.payload, loading: false }
    case 'UDPATE_PAGE':
      return { ...state, loading: true, currentPage: action.payload }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    default:
      return state
  }
}

const initState: PaginationState = {
  pageCount: 0,
  currentPage: 0,
  count: 10,
  loading: true
}

export const useMuiPagination = () => {
  const [pagination, dispatch] = useReducer(paginationReducer, initState)

  const handleChange = useCallback((type: string, payload: any) => {
    dispatch({ type, payload })
  }, [])

  const initPagination = (data: any) => handleChange('INIT_PAGINATION', data)
  const updatePage = (newPage: any) => handleChange('UDPATE_PAGE', newPage)
  const stopLoadingPaginationChange = () => handleChange('SET_LOADING', false)

  const serverSidePagination = {
    paginationMode: 'server',
    page: pagination.currentPage,
    rowCount: pagination.count,
    pagination: true
  }

  return {
    pagination,
    initPagination,
    updatePage,
    stopLoadingPaginationChange,
    serverSidePagination
  }
}
