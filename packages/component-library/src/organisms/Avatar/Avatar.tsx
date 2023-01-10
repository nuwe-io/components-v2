import PropTypes from 'prop-types'
import { useCallback, useEffect, useReducer } from 'react'

import { errorTypes } from '@nuwe/lib'
import { avatarReducer, initalState } from './Avatar.reducer'
import { AvatarContext } from './AvatarContext'
import { AvatarImage, AvatarPicker } from './components'

interface AvatarProps {
  name: string
  image: string
  id: string
  services: {
    udpateAvatar: (id: string, file: File) => Promise<void>
    generateAvatar: (fileName: string, name: string) => Promise<string>
  }
  onlySource?: boolean
  displayedTexts: {
    stateMessage: string
    accountImageSettings: string
    username: string
    imageDropwdonSelector: string
    cancel: string
    selectImage: string
    upload: string
    imageGeneratorSelector: string
  }
  label?: string
  width?: string
  disabled?: boolean
}

export const Avatar = ({
  name,
  image,
  id,
  services,
  onlySource,
  displayedTexts,
  ...props
}: AvatarProps) => {
  const [state, dispatch] = useReducer(avatarReducer, initalState)

  const { udpateAvatar, generateAvatar } = services

  const isGenerated = state.generators.includes(state.fileName)

  const updateState = useCallback((udpate: any) => dispatch({ type: 'UPDATE', ...udpate }), [])
  const setSourceType = (value: any) => dispatch({ type: 'SOURCE_TYPE', value })
  const setState = useCallback((payload: any) => dispatch({ type: 'SET', payload }), [])

  const openSettings = () => updateState({ name: 'open', value: true })
  const closeSettings = () => setState({ open: false, fileName: image, preview: null, file: null })
  const setFileName = (value: any) => updateState({ name: 'fileName', value })
  const updateName = (value: any) => updateState({ name: 'name', value })
  const setFile = (value: any) => updateState({ name: 'file', value })
  const setFilePreview = (value: any) => updateState({ name: 'preview', value })
  const setAlertState = (value: any) => updateState({ name: 'showAlert', value: value })

  useEffect(() => {
    updateState({ name: 'name', value: name })
    updateState({ name: 'fileName', value: image })
    if (onlySource) updateState({ name: 'onlySource', value: true })
  }, [updateState, name, image, onlySource])

  useEffect(() => {
    setState({
      src: isGenerated && !onlySource ? generateAvatar(state.fileName, state.name) : image
    })
  }, [state.fileName, state.name, setState, image, isGenerated, generateAvatar, onlySource])

  const submitUserAvatar = async () => {
    setState({ loading: true, error: false, message: '' })

    const resp: any = await udpateAvatar(id, state)

    if (errorTypes.includes(resp.status))
      return setState({
        loading: false,
        error: true,
        showAlert: true,
        message: resp.data.error || 'udpate_avatar_error',
        severity: 'error'
      })

    setState({
      loading: false,
      error: false,
      showAlert: true,
      message: 'update_avatar_success',
      severity: 'success'
    })

    setTimeout(() => setState({ showAlert: false, open: false }), 3000)
  }

  return (
    <AvatarContext.Provider
      value={{
        state,
        src: state.src,
        updateState,
        openSettings,
        closeSettings,
        setFileName,
        updateName,
        setSourceType,
        setFile,
        setFilePreview,
        setAlertState,
        udpateUserAvatar: submitUserAvatar,
        setState
      }}
    >
      <AvatarImage {...props} />
      <AvatarPicker displayedTexts={displayedTexts} />
    </AvatarContext.Provider>
  )
}

Avatar.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.string,
  services: PropTypes.shape({
    udpateAvatar: PropTypes.func,
    generateAvatar: PropTypes.func
  })
}
