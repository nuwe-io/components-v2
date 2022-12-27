const Switch = (theme: any) => {
  return {
    MuiSwitch: {
      styleOverrides: {
        root: {
          '& .MuiSwitch-track': {
            backgroundColor: `rgb(${theme.palette.customColors.main})`
          }
        }
      }
    }
  }
}

export default Switch
