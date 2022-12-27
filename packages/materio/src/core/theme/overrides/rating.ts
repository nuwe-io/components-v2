const Rating = (theme: any) => {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: theme.palette.warning.main
        }
      }
    }
  }
}

export default Rating
