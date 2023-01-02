// ** React Imports
import { forwardRef } from 'react'

// ** MUI Imports
import MuiAvatar from '@mui/material/Avatar'
import { lighten, useTheme } from '@mui/material/styles'

// ** Hooks Imports
import { UseBgColor } from '../../../hooks/useBgColor'

interface AvatarProps {
  sx?: any
  src?: string
  skin?: 'light' | 'light-static' | 'filled'
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
  children?: React.ReactNode
  variant?: 'rounded' | 'square'
}

export const Avatar = forwardRef((props: AvatarProps, _ref) => {
  const { sx, src, skin, color } = props

  // ** Hook
  const theme = useTheme()
  const bgColors = UseBgColor()

  const getAvatarStyles = (skin: string, skinColor: string) => {
    let avatarStyles
    if (skin === 'light') {
      avatarStyles = { ...bgColors[`${skinColor}Light`] }
    } else if (skin === 'light-static') {
      avatarStyles = {
        color: bgColors[`${skinColor}Light`].color,
        backgroundColor: lighten(theme.palette[skinColor].main, 0.88)
      }
    } else {
      avatarStyles = { ...bgColors[`${skinColor}Filled`] }
    }

    return avatarStyles
  }

  const colors = skin
    ? {
        primary: getAvatarStyles(skin, 'primary'),
        secondary: getAvatarStyles(skin, 'secondary'),
        success: getAvatarStyles(skin, 'success'),
        error: getAvatarStyles(skin, 'error'),
        warning: getAvatarStyles(skin, 'warning'),
        info: getAvatarStyles(skin, 'info')
      }
    : {}

  return (
    <MuiAvatar
      //ref={ref}
      {...props}
      component='div'
      sx={!src && skin && color ? Object.assign(colors[color], sx) : sx}
    />
  )
})

Avatar.displayName = 'Avatar'

Avatar.defaultProps = {
  skin: 'filled',
  color: 'primary'
}
