import { createContext } from 'react'

import { initiState, severities } from './snackbar.reducer'

export const SnackbarContext = createContext<any>({
  snackbar: initiState,
  severities,
  handleSnackbarClose: () => {},
  handleSnackbarChange: () => {}
})
