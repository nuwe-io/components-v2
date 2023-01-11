import { useState } from 'react'
import { useTranslation } from 'react-i18next'

// ** MUI Imports
import { IconButton } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Information } from 'mdi-material-ui'
// ** Component Import
import { useTheme } from '@mui/styles'
import { ReactApexcharts } from '@nuwe/materio'

interface informationDialogProps {
  open: boolean
  handleClose: (value: boolean) => void
  displayedTexts: {
    profileOceanInfoTitle: string
    profileOceanInfoOTitle: string
    profileOceanInfoOText: string
    profileOceanInfoCTitle: string
    profileOceanInfoCText: string
    profileOceanInfoETitle: string
    profileOceanInfoEText: string
    profileOceanInfoATitle: string
    profileOceanInfoAText: string
    profileOceanInfoNTitle: string
    profileOceanInfoNText: string
  }
}

const onClose = (handleClose: any) => () => {
  handleClose(false)
}

export const InformationDialog = ({
  open,
  handleClose,
  displayedTexts
}: informationDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose(handleClose)}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle>{displayedTexts.profileOceanInfoTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText style={{ margin: '10px 0px' }}>
          <span style={{ color: '#5EBF0D' }}>{displayedTexts.profileOceanInfoOTitle}</span>{' '}
          {displayedTexts.profileOceanInfoOText}
        </DialogContentText>

        <DialogContentText style={{ margin: '10px 0px' }}>
          <span style={{ color: '#5EBF0D' }}>{displayedTexts.profileOceanInfoCTitle}</span>{' '}
          {displayedTexts.profileOceanInfoCText}
        </DialogContentText>

        <DialogContentText style={{ margin: '10px 0px' }}>
          <span style={{ color: '#5EBF0D' }}>{displayedTexts.profileOceanInfoETitle}</span>{' '}
          {displayedTexts.profileOceanInfoEText}
        </DialogContentText>

        <DialogContentText style={{ margin: '10px 0px' }}>
          <span style={{ color: '#5EBF0D' }}>{displayedTexts.profileOceanInfoATitle}</span>{' '}
          {displayedTexts.profileOceanInfoAText}
        </DialogContentText>

        <DialogContentText style={{ margin: '10px 0px' }}>
          <span style={{ color: '#5EBF0D' }}>{displayedTexts.profileOceanInfoNTitle}</span>{' '}
          {displayedTexts.profileOceanInfoNText}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

const columnColors = {
  bg: '#f8d3ff',
  series1: '#5EBF0D',
  series2: '#407D3CA2'
}

interface CardWidgetBarCharProps {
  series: any[]
  displayedTexts: {
    profileOceanCheck: string
    profileOceanInfoTitle: string
    profileOceanInfoOTitle: string
    profileOceanInfoOText: string
    profileOceanInfoCTitle: string
    profileOceanInfoCText: string
    profileOceanInfoETitle: string
    profileOceanInfoEText: string
    profileOceanInfoATitle: string
    profileOceanInfoAText: string
    profileOceanInfoNTitle: string
    profileOceanInfoNText: string
  }
}

const onClickInfo = (setShowInfo: any) => () => {
  setShowInfo(true)
}

type position = 'top' | 'bottom' | 'left' | 'right'

export const CardWidgetBarChar = ({ series = [], displayedTexts }: CardWidgetBarCharProps) => {
  const [showInfo, setShowInfo] = useState<boolean>(false)
  const { i18n } = useTranslation()
  const categories = {
    es: ['Extraversión', 'Amabilidad', 'Escrupolosidad', 'Neuroticismo', 'Apertura'],
    en: ['Extraversion', 'Agreeableness', 'Conscientiousness', 'Neuroticism', 'Openness']
  }
  const theme = useTheme() as any

  const options = {
    chart: {
      offsetX: -10,
      stacked: false,
      parentHeightOffset: 0,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '15%',
        colors: {
          backgroundBarRadius: 10,
          backgroundBarColors: [
            'transparent',
            'transparent',
            'transparent',
            'transparent',
            'transparent'
          ]
        }
      }
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '35%'
            }
          }
        }
      }
    ],
    dataLabels: {
      enabled: false
    },
    legend: {
      position: 'top' as position,
      horizontalAlign: 'left' as position,
      labels: {
        colors: theme.palette.text.primary
      }
    },
    colors: [columnColors.series1, columnColors.series2],
    stroke: {
      show: true,
      colors: ['transparet']
    },
    grid: {
      xaxis: {
        lines: {
          show: false
        }
      }
    },
    xaxis: {
      categories: categories[i18n.language] || categories['en'],
      labels: {
        show: true,
        style: {
          colors: [
            theme.palette.text.primary,
            theme.palette.text.primary,
            theme.palette.text.primary,
            theme.palette.text.primary,
            theme.palette.text.primary
          ]
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: [
            theme.palette.text.primary,
            theme.palette.text.primary,
            theme.palette.text.primary,
            theme.palette.text.primary,
            theme.palette.text.primary
          ]
        }
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      theme: 'dark',
      style: {
        fontSize: '12px',
        fontFamily: undefined
      }
    }
  }
  return (
    <Card>
      <CardHeader
        title={displayedTexts.profileOceanCheck}
        titleTypographyProps={{ variant: 'h6' }}
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { mb: 0 },
          '& .MuiCardHeader-content': { mb: [2, 0] }
        }}
        action={
          <IconButton onClick={onClickInfo(setShowInfo)}>
            <Information />
          </IconButton>
        }
      />
      <CardContent>
        <ReactApexcharts options={options} series={series} type='bar' height={350} />
      </CardContent>
      <InformationDialog
        open={showInfo}
        handleClose={setShowInfo}
        displayedTexts={displayedTexts}
      />
    </Card>
  )
}
