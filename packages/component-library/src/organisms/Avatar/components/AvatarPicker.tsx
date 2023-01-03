import { Dialog, DialogContent, Hidden, TextField, Typography } from '@mui/material'

import { CollapseAlert, Dropdown, MaterialBaseDialogActions } from '../../../molecules'

import { AvatarImage, SourceSelector } from '.'
import { useAvatar } from '../useAvatar'

interface AvatarPickerProps {
  displayedTexts: {
    stateMessage: string
    accountImageSettings: string
    username: string
    imageDropwdonSelector: string
    cancel: string
    selectImage: string
    upload: string
  }
}

export const AvatarPicker = ({ displayedTexts }: AvatarPickerProps) => {
  const { state, updateName, closeSettings, setSourceType, udpateUserAvatar, setAlertState } =
    useAvatar() as any
  const disableUpload = state.sourceType === 'File' && !state.file
  return (
    <Dialog fullWidth open={state.open} onClose={closeSettings} style={{ border: 'none' }}>
      <DialogContent style={{ display: 'grid', gap: '0.8rem' }}>
        <CollapseAlert
          message={displayedTexts.stateMessage}
          severity={state.severity}
          showAlert={state.showAlert}
          setAlertState={() => setAlertState(false)}
        />
        <AvatarImage disabled />
        <Typography gutterBottom variant='caption' color='textSecondary' align='center'>
          {displayedTexts.accountImageSettings}
        </Typography>
        <Hidden smUp={state.onlySource}>
          <TextField
            size='small'
            margin='dense'
            label={displayedTexts.username}
            variant='outlined'
            value={state.name}
            onChange={(e) => updateName(e.target.value)}
          />
          <Dropdown
            title={displayedTexts.imageDropwdonSelector}
            array={state.sourceTypes}
            value={state.sourceTypes.indexOf(state.sourceType)}
            onChange={(e) => setSourceType(state.sourceTypes[e.target.value])}
          />
        </Hidden>
        <SourceSelector />
        <MaterialBaseDialogActions
          cancelText={displayedTexts.cancel}
          disabledText={displayedTexts.selectImage}
          accepText={displayedTexts.upload}
          disabled={disableUpload}
          loading={state.loading}
          cancelAction={closeSettings}
          acceptAction={udpateUserAvatar}
        />
      </DialogContent>
    </Dialog>
  )
}
