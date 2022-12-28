import PropTypes from 'prop-types'

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { Alert, AlertTitle, Box } from '@mui/material'

import { useTranslations } from '@nuwe/lib'

interface FallbackErrorProps {
  msg?: string
  key: string
  ns: string
}

const FallbackError = ({ msg, key, ns }: FallbackErrorProps) => {
  const { translate } = useTranslations()
  const message = msg || translate(key, ns)

  return (
    <Box m={1} display='flex' justifyContent='center' alignItems='center'>
      <Alert variant='filled' severity='error' icon={<ErrorOutlineIcon />}>
        <AlertTitle>Error</AlertTitle>
        {message}
      </Alert>
    </Box>
  )
}

FallbackError.propTypes = {
  msg: PropTypes.string,
  key: PropTypes.string,
  ns: PropTypes.string
}

FallbackError.defaultProps = {
  key: 'something_went_wrong',
  ns: 'common'
}

export default FallbackError
