export const Typography = (theme: any) => {
  return {
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: theme.spacing(2)
        }
      }
    }
  }
}
