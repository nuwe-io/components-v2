// ** React Imports
import { forwardRef, useState } from 'react'
import { useForm } from 'react-hook-form'

// ** MUI Imports
import LoadingButton from '@mui/lab/LoadingButton'
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Fade from '@mui/material/Fade'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'

const Transition = forwardRef(function Transition (props, ref) {
  return <Fade ref={ref} {...props} />
})

export const DialogContact = ({
  show,
  setShow,
  onSubmitAction,
  texts,
  submitCallback
}) => {
  const [isLoading, setILoading] = useState(false)

  const onSubmit = async data => {
    setILoading(true)
    onSubmitAction({
      ...data
    }).then(res => {
      reset()
      if (res.status === 200) {
        setShow(false)
        setILoading(false)
        submitCallback()
      }
    })
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  return (
    <Dialog
      fullWidth
      open={show}
      maxWidth='md'
      scroll='body'
      onClose={() => setShow(false)}
      TransitionComponent={Transition}
      onBackdropClick={() => setShow(false)}
    >
      <DialogContent
        sx={{
          pb: 8,
          px: { xs: 8, sm: 15 },
          pt: { xs: 8, sm: 12.5 },
          position: 'relative'
        }}
      >
        <IconButton
          size='small'
          onClick={() => setShow(false)}
          sx={{ position: 'absolute', right: '1rem', top: '1rem' }}
        >
          <Close />
        </IconButton>
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant='h5' sx={{ mb: 3 }}>
            {texts.title}
          </Typography>
          <Typography variant='body2'>{texts.label}</Typography>
        </Box>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={6}>
            <Grid item sm={6} xs={12}>
              {errors?.email?.message && (
                <Typography
                  style={{ margin: '3px 0px' }}
                  variant='body2'
                  color='error'
                >
                  {texts.errors.email}
                </Typography>
              )}
              <TextField
                id='email'
                {...register('email', {
                  required: 'contact_email',
                  pattern: {
                    value:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Debes ingresar una dirección de correo valida'
                  }
                })}
                fullWidth
                defaultValue=''
                label='Email'
                placeholder='Email'
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              {errors?.name?.message && (
                <Typography
                  style={{ margin: '3px 0px' }}
                  variant='body2'
                  color='error'
                >
                  {texts.errors.name}
                </Typography>
              )}
              <TextField
                id='name'
                {...register('name', {
                  required: 'contact_name'
                })}
                fullWidth
                defaultValue=''
                label='Name'
                placeholder='Name'
              />
            </Grid>

            <Grid item xs={12}>
              {errors?.message?.message && (
                <Typography
                  style={{ margin: '3px 0px' }}
                  variant='body2'
                  color='error'
                >
                  {texts.errors.message}
                </Typography>
              )}
              <TextField
                id='message'
                {...register('message', {
                  required: 'contact_message'
                })}
                label='Mensaje'
                multiline
                rows={8}
                fullWidth
                defaultValue=''
              />
            </Grid>
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              padding: '1rem 0rem'
            }}
          >
            <LoadingButton
              loading={isLoading}
              variant='contained'
              type='submit'
              sx={{ mr: 1 }}
            >
              {texts.contact_send}
            </LoadingButton>
            <LoadingButton
              variant='outlined'
              color='error'
              onClick={() => setShow(false)}
            >
              {texts.contact_cancel}
            </LoadingButton>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  )
}
