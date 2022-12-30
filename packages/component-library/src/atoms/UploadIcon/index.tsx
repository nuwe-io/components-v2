import { IconButton } from '@mui/material'

import Upload from '@mui/icons-material/Upload'

interface UploadIconProps {
  htmlFor?: string
}

export const UploadIcon = ({ htmlFor = 'file-upload' }: UploadIconProps) => (
  <label htmlFor={htmlFor}>
    <IconButton component='span' color='primary'>
      <Upload />
    </IconButton>
  </label>
)
