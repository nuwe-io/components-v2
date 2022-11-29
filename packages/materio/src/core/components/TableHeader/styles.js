export const styles = {
  textField: {
    width: {
      xs: 1,
      sm: 'auto'
    },
    m: theme => theme.spacing(1, 0.5, 1.5),
    '& .MuiSvgIcon-root': {
      mr: 0.5
    },
    '& .MuiInput-underline:before': {
      borderBottom: 1,
      borderColor: 'divider'
    }
  }
}
