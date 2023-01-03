import Close from '@mui/icons-material/Close'
import { Alert, IconButton, Snackbar } from '@mui/material'

import { useSnackbar } from './useSnackbar'

export const SnackbarAlert = () => {
  const { snackbar, handleSnackbarClose } = useSnackbar() as any
  const { open, message, variant } = snackbar
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }}
      action={[
        <IconButton key='close' aria-label='close' color='inherit' onClick={handleSnackbarClose}>
          <Close />
        </IconButton>
      ]}
      autoHideDuration={3000}
      open={open}
      onClose={handleSnackbarClose}
    >
      <Alert
        sx={{ width: '100%' }}
        variant='filled'
        onClose={handleSnackbarClose}
        severity={variant}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}
