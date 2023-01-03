const severities = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
}

const initiState = {
  open: false,
  message: 'Everything went well',
  severities: severities.success
}

const snackbarReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'CHANGE_OPEN':
      return {
        ...state,
        open: action.open
      }
    case 'CHANGE_MESSAGE':
      return {
        ...state,
        message: action.message
      }
    case 'CHANGE_SEVERITY':
      return {
        ...state,
        variant: action.variant
      }
    case 'OPEN_SNACKBAR':
      return {
        ...state,
        open: true,
        message: action.message,
        variant: action.variant
      }
    case 'CLOSE_SNACKBAR':
      return {
        ...state,
        open: false,
        message: '',
        variant: ''
      }
    default:
      return state
  }
}

export { snackbarReducer, initiState, severities }
