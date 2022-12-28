import { Alert, AlertColor, Collapse } from '@mui/material'

interface CollapseAlertProps {
  message: string
  severity: AlertColor
  showAlert: boolean
  setAlertState: () => void
}

export const CollapseAlert = ({
  message,
  severity,
  showAlert,
  setAlertState
}: CollapseAlertProps) => {
  return (
    <Collapse style={{ minHeight: `${(showAlert && 50) || 0}px` }} in={showAlert}>
      <Alert variant='outlined' severity={severity} onClose={setAlertState}>
        {message}
      </Alert>
    </Collapse>
  )
}
