interface FileSelectorProps {
  fileName: string
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const FileSelector = ({ fileName, handleFileChange }: FileSelectorProps) => {
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
