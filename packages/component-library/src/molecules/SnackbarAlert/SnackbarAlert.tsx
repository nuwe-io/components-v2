import { Alert, Snackbar } from '@mui/material'

interface SnackbarAlertProps {
  open: boolean
  autoHideDuration?: number
  onClose: any
  message: string
  severity: 'error' | 'info' | 'success' | 'warning'
  variant?: 'filled' | 'outlined' | 'standard'
  anchorOrigin?: {
    vertical: 'top' | 'bottom'
    horizontal: 'left' | 'center' | 'right'
  }
}

export const SnackbarAlert = ({
  open,
  autoHideDuration,
  onClose,
  message,
  severity,
  variant,
  anchorOrigin
}: SnackbarAlertProps) => (
  <Snackbar
    anchorOrigin={anchorOrigin}
    open={open}
    autoHideDuration={autoHideDuration}
    onClose={onClose}
  >
    <Alert severity={severity} onClose={onClose} variant={variant}>
      {message}
    </Alert>
  </Snackbar>
)

SnackbarAlert.defaultProps = {
  variant: 'filled',
  autoHideDuration: 3000,
  anchorOrigin: { vertical: 'bottom', horizontal: 'left' }
}
