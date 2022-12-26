import { Typography } from '@mui/material'

interface OpenToWorkColumnProps {
  isOpenToWork: boolean
}

export const OpenToWorkColumn = ({ isOpenToWork }: OpenToWorkColumnProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 5,
        marginRight: 20,
        width: '100%',
        backgroundColor: isOpenToWork ? '#569B51' : '#F0533D'
      }}
    >
      <Typography style={{ color: 'white', paddingLeft: 5 }} variant='body1'>
        {isOpenToWork ? 'ACTIVE' : 'NOT LOOKING'}
      </Typography>
    </div>
  )
}
