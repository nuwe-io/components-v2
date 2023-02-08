// ** MUI Components
import { Link } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// ** Layout Import
import { BoxWrapper } from 'atoms'

//** SEO Components
import { PageSEO, PageSEOProps } from '../../widgets'

export interface NotFoundProps extends PageSEOProps {
  logoutTitle: string
  title: string
  description: string
  backToHomeTitle?: string
  homeUrl: string
}

export const NotFound = ({
  backToHomeTitle = 'Back to Home',
  title = 'Page Not Found ⚠️',
  description = `We couldn't find the page you are looking for.`,
  url,
  Head,
  homeUrl
}: NotFoundProps) => {
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
            <Typography variant='h1'>404</Typography>
            <Typography variant='h5' sx={{ mb: 1, fontSize: '1.5rem !important' }}>
              {title}
            </Typography>
            <Typography variant='body2'>{description}</Typography>
          </BoxWrapper>
          <Link href={homeUrl}>
            <Button component='a' variant='contained' sx={{ px: 5.5, mt: 10 }}>
              {backToHomeTitle}
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  )
}
