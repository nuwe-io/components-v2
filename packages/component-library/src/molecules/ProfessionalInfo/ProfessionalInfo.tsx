import { Box, Checkbox, Chip, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { Translations } from '@nuwe/lib'

export const useStyles = makeStyles((_theme: any) => ({
  flex: {
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 400px)': {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      flexFlow: 'column'
    }
  }
}))

interface ProfessionalInfoProps {
  handlerData: (value: any, key: string, parent?: string) => void
  data: any
  error: string
}

export const ProfessionalInfo = ({ handlerData, data, error }: ProfessionalInfoProps) => {
  const options = ['PEQUEÑA', 'MEDIANA', 'GRANDE', 'MULTINACIONAL']
  const sizes = [
    <Translations key={0} ns='auth' text='company_size_small' />,
    <Translations key={1} ns='auth' text='company_size_mid' />,
    <Translations key={2} ns='auth' text='company_size_big' />,
    <Translations key={3} ns='auth' text='company_size_multi' />
  ]

  const updateCompanyParams = (value: any, key: string) => handlerData(value, key, 'company')
  const updateSize = (value: any) => updateCompanyParams(value, 'size')
  const { flex } = useStyles()
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography style={{ marginBottom: '1rem' }} variant='h5'>
          <Translations ns='auth' text='work_title' />
        </Typography>
        {error && (
          <Typography variant='body2' style={{ color: '#E22208', margin: '7px 0px' }}>
            {error}
          </Typography>
        )}

        <Box className={flex}>
          <Checkbox
            name='opentowork'
            onChange={(e) => handlerData(e.target.checked, 'opentowork')}
            checked={data.opentowork}
          />
          <Typography>
            <Translations ns='auth' text='work_opentowork' />
          </Typography>
        </Box>

        <Box className={flex}>
          <Checkbox
            name='remote'
            onChange={(e) => updateCompanyParams(e.target.checked, 'remote')}
            checked={data.company.remote}
          />
          <Typography>
            <Translations ns='auth' text='work_remote' />
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Typography variant='body1'>
          <Translations ns='auth' text='work_company_size' />
        </Typography>
        <Box style={{ marginTop: '10px' }}>
          {sizes.map((size) => (
            <Chip
              name={`chip-${size.key}`}
              style={{
                padding: '0rem 1rem',
                marginRight: '10px',
                marginTop: '10px',
                borderColor: data.company.size === options[size.key as number] ? '#5EBF0D' : '',
                color: data.company.size === options[size.key as number] ? '#5EBF0D' : ''
              }}
              clickable
              label={size}
              onClick={() => updateSize(options[size.key as number])}
              key={size}
              variant='outlined'
            />
          ))}
        </Box>
      </Grid>
    </Grid>
  )
}
