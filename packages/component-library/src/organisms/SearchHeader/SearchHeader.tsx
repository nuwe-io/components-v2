import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import Magnify from 'mdi-material-ui/Magnify'

// ** Styles components imports
import { Card, TextField } from './styles'

//** Shared components
import { ButtonLoader } from '../../atoms'

interface SearchHeaderProps {
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
  loading: boolean
  title: string
  description: string
  searchPlaceholder: string
  buttonTitle: string
  headerOnClick: () => void
  displayedTexts: {
    title: string
    description: string
    buttonTitle: string
  }
}

export const SearchHeader = (props: SearchHeaderProps) => {
  // ** Props
  const { searchTerm, setSearchTerm, loading, searchPlaceholder, headerOnClick, displayedTexts } =
    props

  const handleFaqFilter = (e: any) => setSearchTerm(e.target.value)

  return (
    <Card>
      <CardContent
        sx={{
          pt: 20,
          textAlign: 'center',
          pb: (theme) => `${theme.spacing(10)} !important`
        }}
      >
        <Typography
          variant='h4'
          sx={{ mb: 1.5, color: 'primary.main', fontWeight: 600, fontSize: '1.5rem !important' }}
        >
          {displayedTexts.title}
        </Typography>
        <Typography variant='body2' sx={{ mb: 7 }}>
          {displayedTexts.description}
        </Typography>
        <TextField
          value={searchTerm}
          size='small'
          placeholder={searchPlaceholder || 'Write the flag name here'}
          onChange={(e: any) => handleFaqFilter(e)}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Magnify />
              </InputAdornment>
            )
          }}
        />
        <ButtonLoader
          onClick={headerOnClick}
          disabled={loading}
          loading={loading}
          size='medium'
          variant='contained'
          color='primary'
          sx={{ ml: 2 }}
        >
          {displayedTexts.buttonTitle}
        </ButtonLoader>
      </CardContent>
    </Card>
  )
}
