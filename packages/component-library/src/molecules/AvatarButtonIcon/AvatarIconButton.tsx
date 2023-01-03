import { Avatar, IconButton } from '@mui/material'

interface AvatarIconButtonProps {
  width?: string
  disabled?: boolean
  onClick?: () => void
  src?: string
  color?: string
  label?: string
}

export const AvatarIconButton = ({
  width = '60px',
  disabled,
  onClick,
  src,
  color,
  label
}: AvatarIconButtonProps) => {
  return (
    <IconButton
      style={{ marginRight: 10, border: `2.5px solid ${color}` }}
      disabled={disabled}
      onClick={onClick}
    >
      <Avatar
        style={{
          width: width,
          height: width,
          fontWeight: 900,
          textTransform: 'capitalize',
          color: 'gainsboro'
        }}
        src={src}
      >
        {label?.charAt(0)}
      </Avatar>
    </IconButton>
  )
}

AvatarIconButton.defaultProps = {
  color: '#fff'
}
