import { useState } from 'react'

import { filePreview } from '@nuwe/lib'
import { FileSelector } from '../../../molecules'

import { useAvatar } from '../useAvatar'

export const AvatarSelector = () => {
  const { state, setFile, setFileName, setFilePreview } = useAvatar() as any

  const [fileError, setFileError] = useState<string>('')

  const handleFileChange = async (event: any) => {
    const file = event.target.files[0]
    const preview = await filePreview(file)
    setFilePreview(preview)
    if (!file) return setFileError('Error while selection the file')

    setFile(file)
    setFileName(file.name)
  }

  return (
    <FileSelector
      fileError={fileError}
      fileName={state?.fileName}
      setFileName={setFileName}
      handleFileChange={handleFileChange}
    />
  )
}
