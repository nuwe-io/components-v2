import { Settings } from '../../../../types'

const Autocomplete = (theme: any, skin: Settings['skin']) => {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          ...(skin === 'bordered' && {
            boxShadow: 'none',
            border: `1px solid ${theme.palette.divider}`
          })
        }
      }
    }
  }
}

export default Autocomplete
