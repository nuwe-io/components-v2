import PropTypes from 'prop-types'
import { createContext, useReducer } from 'react'

import { initiState, severities, snackbarReducer } from './snackbar.reducer'
import { SnackbarAlert } from './SnackbarAlert.container'

import { withProviders } from '@nuwe/lib'

export const SnackbarContext = createContext({
  snackbar: initiState,
  severities,
  handleSnackbarClose: () => {},
  handleSnackbarChange: (message: string, variant: string) => {}
})

export const SnackbarProvider = ({ children }: any) => {
  const [snackbar, dispatch] = useReducer(snackbarReducer, initiState)

  const handleSnackbarClose = () => dispatch({ type: 'CLOSE_SNACKBAR' })

  const handleSnackbarChange = (message: string, variant: string) =>
    dispatch({
      type: 'OPEN_SNACKBAR',
      message,
      variant
    })

  return (
    <SnackbarContext.Provider
      value={{ snackbar, severities, handleSnackbarClose, handleSnackbarChange }}
    >
      {children}
      <SnackbarAlert />
    </SnackbarContext.Provider>
  )
}

SnackbarProvider.propTypes = {
  children: PropTypes.node
}
export const withSnackbarProvider = (component: any) => withProviders(SnackbarProvider)(component)
