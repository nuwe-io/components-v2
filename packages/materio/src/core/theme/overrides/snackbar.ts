import { Settings } from '../../../../types'

export const Snackbar = (theme: any, skin: Settings['skin']) => {
  return {
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          ...(skin === 'bordered' && { boxShadow: 'none' }),
          backgroundColor:
            theme.palette.mode === 'light' ? theme.palette.grey[900] : theme.palette.grey[100]
        }
      }
    }
  }
}
