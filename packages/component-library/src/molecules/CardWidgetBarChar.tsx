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
import { Translations } from '@nuwe/lib'
import { ReactApexcharts } from '@nuwe/materio'

interface informationDialogProps {
  open: boolean
  handleClose: (value: boolean) => void
}

const onClose = (handleClose: any) => () => {
  handleClose(false)
}

export const InformationDialog = ({ open, handleClose }: informationDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose(handleClose)}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle>
        <Translations ns='profile' text='profile_ocean_info_title' />
      </DialogTitle>
      <DialogContent>
        <DialogContentText style={{ margin: '10px 0px' }}>
          <span style={{ color: '#5EBF0D' }}>
            <Translations ns='profile' text='profile_ocean_info_o_title' />
          </span>{' '}
          <Translations ns='profile' text='profile_ocean_info_o_text' />
        </DialogContentText>

        <DialogContentText style={{ margin: '10px 0px' }}>
          <span style={{ color: '#5EBF0D' }}>
            <Translations ns='profile' text='profile_ocean_info_c_title' />
          </span>{' '}
          <Translations ns='profile' text='profile_ocean_info_c_text' />
        </DialogContentText>

        <DialogContentText style={{ margin: '10px 0px' }}>
          <span style={{ color: '#5EBF0D' }}>
            <Translations ns='profile' text='profile_ocean_info_e_title' />
          </span>{' '}
          <Translations ns='profile' text='profile_ocean_info_e_text' />
        </DialogContentText>

        <DialogContentText style={{ margin: '10px 0px' }}>
          <span style={{ color: '#5EBF0D' }}>
            <Translations ns='profile' text='profile_ocean_info_a_title' />
          </span>{' '}
          <Translations ns='profile' text='profile_ocean_info_a_text' />
        </DialogContentText>

        <DialogContentText style={{ margin: '10px 0px' }}>
          <span style={{ color: '#5EBF0D' }}>
            <Translations ns='profile' text='profile_ocean_info_n_title' />
          </span>{' '}
          <Translations ns='profile' text='profile_ocean_info_n_text' />
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
}

const onClickInfo = (setShowInfo: any) => () => {
  setShowInfo(true)
}

export const CardWidgetBarChar = ({ series = [] }: CardWidgetBarCharProps) => {
  const [showInfo, setShowInfo] = useState<boolean>(false)
  const { i18n } = useTranslation()
  const categories = {
    es: ['Extraversión', 'Amabilidad', 'Escrupolosidad', 'Neuroticismo', 'Apertura'],
    en: ['Extraversion', 'Agreeableness', 'Conscientiousness', 'Neuroticism', 'Openness']
  }
  const theme = useTheme()

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
      position: 'top',
      horizontalAlign: 'left',
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
        title={<Translations ns='profile' text='profile_ocean_check' />}
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
      <InformationDialog open={showInfo} handleClose={setShowInfo} />
    </Card>
  )
}
