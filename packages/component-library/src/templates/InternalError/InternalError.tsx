// ** MUI Components
import { Link } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// ** Layout Import

import { PageSEO, PageSEOProps } from '../../widgets'

import { BoxWrapper } from 'atoms'

export interface InternalErrorProps extends PageSEOProps {
  title: string
  description: string
  backToHomeTitle?: string
  homeUrl: string
}

export const InternalError = ({
  backToHomeTitle = 'Back to Home',
  title = 'Internal server error 👨🏻‍💻',
  description = 'Oops, something went wrong!',
  url,
  Head,
  homeUrl
}: InternalErrorProps) => {
  return (
    <>
      <PageSEO url={url} title={title} description={description} Head={Head} />
      <Box className='content-center'>
        <Box
          sx={{
            p: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <BoxWrapper>
            <Typography variant='h1'>500</Typography>
            <Typography variant='h5' sx={{ mb: 1, fontSize: '1.5rem !important' }}>
              {title}
            </Typography>
            <Typography variant='body2'>{description}</Typography>
          </BoxWrapper>
          <Box>
            <Link href={homeUrl}>
              <Button component='a' variant='contained' sx={{ px: 5.5, m: 2 }}>
                {backToHomeTitle}
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  )
}
