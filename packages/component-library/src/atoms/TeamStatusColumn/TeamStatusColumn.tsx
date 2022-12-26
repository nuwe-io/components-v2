import { Typography } from '@mui/material'
import { currentLanguage } from '@nuwe/lib'

interface TeamStatusColumnProps {
  status: string
}

export const TeamStatusColumn = ({ status }: TeamStatusColumnProps) => {
  const { language } = currentLanguage()

  const backgroundColor = () => {
    if (status === 'open') {
      return '#569B51'
    }
    if (status === 'last member') {
      return '#FF9800'
    }

    return '#F0533D'
  }

  const computeStatusLabelES = () => {
    if (status === 'open') return 'abierto'
    if (status === 'last member') return 'última vacante'
    if (status === 'closed') return 'cerrado'
    else return 'cerrado'
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 5,
        width: '100%',
        backgroundColor: backgroundColor()
      }}
    >
      <Typography style={{ color: 'white', paddingLeft: 5, fontSize: '0.85rem' }} variant='body1'>
        {language?.includes('en') ? status.toUpperCase() : computeStatusLabelES().toUpperCase()}
      </Typography>
    </div>
  )
}
