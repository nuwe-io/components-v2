import { Button, Grid, TextField, Typography } from '@mui/material'

interface AccountVerificationProps {
  data: {
    email: string
  }
  handlerCode: (event: React.ChangeEvent<HTMLInputElement>) => void
  resendCode: () => void
  error?: string
  resend?: boolean
  success?: string
  displayedTexts: {
    tokenTitle: string
    tokenSuccess: string
    tokenCode: string
    tokenResentText: string
    tokenResentLoading: string
    tokenResentAction: string
  }
}

export const AccountVerification = ({
  data,
  handlerCode,
  resendCode,
  error,
  resend,
  success,
  displayedTexts
}: AccountVerificationProps) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography style={{ margin: '1rem 0rem' }} variant='h4'>
          {displayedTexts.tokenTitle}
        </Typography>
        <Typography style={{ margin: '1.5rem 0rem' }} variant='h6' color='textSecondary'>
          {displayedTexts.tokenSuccess} {data.email}
        </Typography>
        {error && (
          <Typography variant='body2' style={{ color: '#E22208', margin: '7px 0px' }}>
            {error}
          </Typography>
        )}
        {success && (
          <Typography variant='body2' style={{ color: '#569B51', margin: '7px 0px' }}>
            {success}
          </Typography>
        )}
        <TextField
          label={displayedTexts.tokenCode}
          variant='outlined'
          fullWidth
          type='text'
          onChange={handlerCode}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography style={{ margin: '20px 0px' }} variant='h6' color='textSecondary'>
          {displayedTexts.tokenResentText}
        </Typography>
        <Button disabled={resend} onClick={resendCode} variant='outlined'>
          {resend ? displayedTexts.tokenResentLoading : displayedTexts.tokenResentAction}
        </Button>
      </Grid>
    </Grid>
  )
}
