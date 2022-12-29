interface FileSelectorProps {
  fileError: string
  fileName: string
  setFileName: (fileName: string) => void
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const FileSelector = ({
  fileError,
  fileName,
  setFileName,
  handleFileChange
}: FileSelectorProps) => {
  return (
    <div>
      <input
        accept='image/*'
        type='file'
        id={`file-upload-${fileName}`}
        onChange={handleFileChange}
      />
    </div>
  )
}
