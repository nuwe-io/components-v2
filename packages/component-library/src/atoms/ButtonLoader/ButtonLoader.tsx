import { Button, CircularProgress } from '@mui/material'

interface ButtonLoaderProps {
  noShow?: boolean
  loading?: boolean
  disabled?: boolean
  children?: React.ReactNode | string
  onClick: () => void
  isSecondary?: boolean
  startIcon?: React.ReactNode
  showStartIcon?: boolean
  outlined?: boolean
}

export const ButtonLoader = ({
  noShow,
  loading = false,
  disabled = false,
  children = 'Click me',
  onClick,
  isSecondary,
  startIcon,
  showStartIcon,
  outlined,
  ...props
}: ButtonLoaderProps) => {
  if (noShow) return null
  return (
    <Button
      id='btn-loader'
      disableElevation
      color={isSecondary ? 'secondary' : 'primary'}
      variant={outlined ? 'outlined' : 'contained'}
      disabled={loading || disabled}
      onClick={onClick}
      startIcon={showStartIcon && startIcon}
      endIcon={loading && <CircularProgress size={20} />}
      {...props}
    >
      {children}
    </Button>
  )
}
