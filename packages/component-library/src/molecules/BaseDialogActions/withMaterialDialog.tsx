/* eslint-disable react/display-name */
import { DialogActions } from '@mui/material'

export const withMaterialDialog = (Component: any) => (props: any) =>
  (
    <DialogActions>
      <Component {...props} />
    </DialogActions>
  )
