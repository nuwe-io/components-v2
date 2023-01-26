import { useReducer } from 'react'

import { withProviders } from '../../HOC'
import { initiState, severities, snackbarReducer } from './snackbar.reducer'
import { SnackbarAlert } from './SnackbarAlert.container'
import { SnackbarContext } from './SnackbarContext'

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

export const withSnackbarProvider = (component: any) => withProviders(SnackbarProvider)(component)
