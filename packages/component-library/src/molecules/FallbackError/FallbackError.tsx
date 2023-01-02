import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { Alert, AlertTitle, Box } from '@mui/material'

interface FallbackErrorProps {
  msg: string
}

const FallbackError = ({ msg }: FallbackErrorProps) => {
  return (
    <Box m={1} display='flex' justifyContent='center' alignItems='center'>
      <Alert variant='filled' severity='error' icon={<ErrorOutlineIcon />}>
        <AlertTitle>Error</AlertTitle>
        {msg}
      </Alert>
    </Box>
  )
}

export default FallbackError
