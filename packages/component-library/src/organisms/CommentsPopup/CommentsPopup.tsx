import { DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import TextField from '@mui/material/TextField'
import { useState } from 'react'

import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import { DevColumn } from '../../atoms'

interface CommentsPopupProps {
  handleClose: () => void
  username: string
  image: string
  userId: string
  setComments: (userId: string, comments: string) => void
  comments: string
  open: boolean
}

export const CommentsPopup = ({
  handleClose,
  username,
  image,
  userId,
  setComments,
  comments,
  open
}: CommentsPopupProps) => {
  const [text, setText] = useState(comments)

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Dialog fullScreen={fullScreen} open={open} /*handleClose={handleClose}*/>
      <DialogTitle>
        <DevColumn username={username} image={image} />
      </DialogTitle>
      <DialogContent sx={{ minWidth: '600px', mt: 4 }}>
        <Typography variant='body2' sx={{ mt: 2, mb: 4 }}>
          Here you can write your comments about the participant. This will only be visibile to you
          and your team.
        </Typography>
        <TextField
          fullWidth
          onChange={(e) => setText(e.target.value)}
          value={text}
          defaultValue={comments}
          color='secondary'
          sx={{ fontSize: '1rem' }}
          id='outlined-multiline-static'
          multiline
          rows={6}
        />
      </DialogContent>
      <DialogActions>
        <Button
          color='primary'
          size='small'
          variant='contained'
          onClick={() => {
            setComments(userId, text)
            handleClose()
          }}
        >
          Save
        </Button>

        <Button
          variant='outlined'
          color='secondary'
          size='small'
          onClick={() => {
            setText(comments)
            setComments(userId, comments)
            handleClose()
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}
