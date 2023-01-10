import { createContext } from 'react'

export const AvatarContext = createContext<any>({
  state: {
    open: false,
    name: '',
    fileName: '',
    preview: null,
    file: null,
    showAlert: false,
    message: '',
    severity: 'success',
    loading: false,
    error: false,
    onlySource: false,
    src: ''
  },
  src: '',
  updateState: () => {},
  openSettings: () => {},
  closeSettings: () => {},
  setFileName: () => {},
  updateName: () => {},
  setSourceType: () => {},
  setFile: () => {},
  setFilePreview: () => {},
  setAlertState: () => {}
})
