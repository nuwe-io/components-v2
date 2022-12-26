export const Divider = (theme: any) => {
  return {
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: `${theme.spacing(2)} 0`
        }
      }
    }
  }
}
