import { Avatar, IconButton } from '@mui/material'

import { useAvatar } from '../useAvatar'

interface AvatarImageProps {
  width?: string
  disabled?: boolean
}

export const AvatarImage = ({ width = '100px', disabled }: AvatarImageProps) => {
  const { state, src, openSettings } = useAvatar() as any

  return (
    <IconButton style={{ padding: 10 }} disabled={disabled} onClick={openSettings}>
      {<Avatar style={{ width: width, height: width }} alt='test' src={state.preview || src} />}
    </IconButton>
  )
}
