import { Box, Checkbox, Chip, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

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
  displayedTexts: {
    companySizeSmall: string
    companySizeMid: string
    companySizeBig: string
    companySizeMulti: string
    workTitle: string
    workOpentowork: string
    workRemote: string
    workCompanySize: string
  }
}

export const ProfessionalInfo = ({
  handlerData,
  data,
  error,
  displayedTexts
}: ProfessionalInfoProps) => {
  const options = ['PEQUEÑA', 'MEDIANA', 'GRANDE', 'MULTINACIONAL']
  const sizes = [
    displayedTexts.companySizeSmall,
    displayedTexts.companySizeMid,
    displayedTexts.companySizeBig,
    displayedTexts.companySizeMulti
  ]

  const updateCompanyParams = (value: any, key: string) => handlerData(value, key, 'company')
  const updateSize = (value: any) => updateCompanyParams(value, 'size')
  const { flex } = useStyles()
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography style={{ marginBottom: '1rem' }} variant='h5'>
          {displayedTexts.workTitle}
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
          <Typography>{displayedTexts.workOpentowork}</Typography>
        </Box>

        <Box className={flex}>
          <Checkbox
            name='remote'
            onChange={(e) => updateCompanyParams(e.target.checked, 'remote')}
            checked={data.company.remote}
          />
          <Typography>{displayedTexts.workRemote}</Typography>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Typography variant='body1'>{displayedTexts.workCompanySize}</Typography>
        <Box style={{ marginTop: '10px' }}>
          {sizes.map((size: any) => (
            <Chip
              //name={`chip-${size.key}`}
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
