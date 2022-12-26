// ** Util Import

import { hexToRGBA } from '../../utils'

export const Tooltip = (theme: any) => {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor:
            theme.palette.mode === 'light'
              ? hexToRGBA(theme.palette.grey[900], 0.9)
              : hexToRGBA(theme.palette.grey[700], 0.9)
        },
        arrow: {
          color:
            theme.palette.mode === 'light'
              ? hexToRGBA(theme.palette.grey[900], 0.9)
              : hexToRGBA(theme.palette.grey[700], 0.9)
        }
      }
    }
  }
}
