// ** MUI Components
import { Link } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// ** Layout Import

import { PageSEO, PageSEOProps } from '../../widgets'

import { BoxWrapper } from 'atoms'

export interface NotAuthorizedProps extends PageSEOProps {
  logoutTitle: string
  title: string
  description: string
  backToHomeTitle?: string
  homeUrl: string
  logout: () => void
}
export const NotAuthorized = ({
  logoutTitle = 'Logout',
  backToHomeTitle = 'Back to Home',
  title = 'You are not authorized! 🔐',
  description = `You don't have permission to access this page. Go Home!`,
  url,
  Head,
  homeUrl,
  logout
}: NotAuthorizedProps) => {
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
            <Typography variant='h1'>401</Typography>
            <Typography variant='h5' sx={{ mb: 1, fontSize: '1.5rem !important' }}>
              {title}
            </Typography>
            <Typography variant='body2'>{description}</Typography>
          </BoxWrapper>
          <Box>
            <Button onClick={logout} variant='outlined' sx={{ px: 5.5, m: 2 }}>
              {logoutTitle}
            </Button>
            <Link href={homeUrl}>
              <Button component='a' variant='contained' sx={{ px: 5.5, m: 2 }}>
                {backToHomeTitle || 'Back to Home'}
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  )
}
