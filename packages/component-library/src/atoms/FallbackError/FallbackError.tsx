import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { Alert, AlertTitle, Box } from '@mui/material'

export interface FallbackErrorProps {
  msg?: string
}

export const FallbackError = ({ msg }: FallbackErrorProps) => {
  return (
    <Box m={1} display='flex' justifyContent='center' alignItems='center'>
      <Alert variant='filled' severity='error' icon={<ErrorOutlineIcon />}>
        <AlertTitle>Error</AlertTitle>
        {msg ? msg : null}
      </Alert>
    </Box>
  )
}
