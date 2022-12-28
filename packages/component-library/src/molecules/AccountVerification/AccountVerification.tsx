import { Button, Grid, TextField, Typography } from '@mui/material'

import { Translations } from '@nuwe/lib'

interface AccountVerificationProps {
  data: {
    email: string
  }
  handlerCode: (event: React.ChangeEvent<HTMLInputElement>) => void
  resendCode: () => void
  error?: string
  resend?: boolean
  success?: string
}

export const AccountVerification = ({
  data,
  handlerCode,
  resendCode,
  error,
  resend,
  success
}: AccountVerificationProps) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography style={{ margin: '1rem 0rem' }} variant='h4'>
          <Translations ns='auth' text='token_title' />
        </Typography>
        <Typography style={{ margin: '1.5rem 0rem' }} variant='h6' color='textSecondary'>
          <Translations ns='auth' text='token_success' /> {data.email}
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
          label={<Translations ns='auth' text='token_code' />}
          variant='outlined'
          fullWidth
          type='text'
          onChange={handlerCode}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography style={{ margin: '20px 0px' }} variant='h6' color='textSecondary'>
          <Translations ns='auth' text='token_resent_text' />
        </Typography>
        <Button disabled={resend} onClick={resendCode} variant='outlined'>
          {resend ? (
            <Translations ns='auth' text='token_resent_loading' />
          ) : (
            <Translations ns='auth' text='token_resent_action' />
          )}
        </Button>
      </Grid>
    </Grid>
  )
}
