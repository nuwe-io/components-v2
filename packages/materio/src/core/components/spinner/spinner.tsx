// ** MUI Import
import { Box, Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { useTheme } from '@mui/material/styles'

export const FallbackSpinner = () => {
  const theme = useTheme()

  const svg = (
    <svg
      width={72}
      height={50}
      version='1.1'
      viewBox='0 0 276 312'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        d='M154.649 250.153V61.3276L116.172 38.599V237.582L96.4401 249.249V26.9432L60.3441 5.62088C33.6794 -10.1302 0 9.09159 0 40.061V271.419C0 293.738 17.492 309.956 37.2445 311.379V66.9362C37.2445 55.4937 46.5204 46.2177 57.963 46.2177V307.165C58.7621 306.76 59.5562 306.325 60.3441 305.859L154.649 250.153ZM174.381 238.497L256.175 190.18C282.382 174.699 282.382 136.781 256.175 121.3L232.59 107.368V169.066L212.858 180.723V95.7126L174.381 72.9835V238.497Z'
        fill={theme.palette.primary.main}
      />
    </svg>
  )

  return (
    <Box
      position='relative'
      display='flex'
      alignItems='center'
      justifyContent='center'
      sx={{ mt: 10 }}
    >
      <CircularProgress disableShrink sx={{ mt: -1.3, ml: -3 }} size='5.5rem' thickness={2.3} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position='absolute'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <Typography variant='caption' component='div' color='textSecondary'>
          {svg}
        </Typography>
      </Box>
    </Box>
  )
}
