import { styled } from '@mui/system'

export const StyledExplanationIcon = styled('div')({
  width: '25%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',

  '.circle': {
    width: 100,
    height: 100,
    backgroundColor: '#312D4B',
    borderRadius: 50,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  '@media screen and (max-width: 600px)': {
    width: '75%'
  }
})
