import { useState } from 'react'

import { formatFileSize, useCSVReader } from 'react-papaparse'

const GREY = '#CCC'
const GREY_DIM = '#686868'

const styles = {
  zone: {
    alignItems: 'center',
    marginTop: '20px',
    border: `1px dashed ${GREY}`,
    display: 'flex',
    borderRadius: 5,
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    padding: 20
  },
  zoneHover: {
    borderColor: GREY_DIM
  }
}

interface FileResultProps {
  file: File
}

const FileResult = ({ file }: FileResultProps) => (
  <>
    <span style={{ display: 'flex', flex: 'wrap' }}>{formatFileSize(file.size)}</span>
    <span>{file.name}</span>
  </>
)

const defaultText = 'Drag and drop a CSV file here'

interface CsvUploadProps {
  getResults: (results: any) => void
}

export function CsvUpload({ getResults }: CsvUploadProps) {
  const { CSVReader } = useCSVReader()
  const [zoneHover, setZoneHover] = useState(false)

  return (
    <CSVReader
      onUploadAccepted={(results: any) => {
        getResults(results.data)
        setZoneHover(false)
      }}
      onDragOver={(event: any) => {
        event.preventDefault()
        setZoneHover(true)
      }}
      onDragLeave={(event: any) => {
        event.preventDefault()
        setZoneHover(false)
      }}
      config={{ header: true, quotes: false }}
    >
      {({ getRootProps, acceptedFile }: any) => (
        <>
          <div
            {...getRootProps()}
            style={Object.assign({}, styles.zone, zoneHover && styles.zoneHover)}
          >
            {acceptedFile ? <FileResult file={acceptedFile} /> : defaultText}
          </div>
        </>
      )}
    </CSVReader>
  )
}
