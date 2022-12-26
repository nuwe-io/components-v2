// ** Util Import

import { hexToRGBA } from '../../utils'

export const Backdrop = (theme: any) => {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor:
            theme.palette.mode === 'light'
              ? `rgba(${theme.palette.customColors.main}, 0.7)`
              : hexToRGBA(theme.palette.background.default, 0.7)
        },
        invisible: {
          backgroundColor: 'transparent'
        }
      }
    }
  }
}
