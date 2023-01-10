import { filePreview } from '@nuwe/lib'
import { FileSelector } from '../../../molecules'

import { useAvatar } from '../useAvatar'

export const AvatarSelector = () => {
  const { state, setFile, setFileName, setFilePreview } = useAvatar() as any

  const handleFileChange = async (event: any) => {
    const file = event.target.files[0]
    const preview = await filePreview(file)
    setFilePreview(preview)

    setFile(file)
    setFileName(file.name)
  }

  return <FileSelector fileName={state?.fileName} handleFileChange={handleFileChange} />
}
