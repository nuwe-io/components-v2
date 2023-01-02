// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
// import { GridToolbarFilterButton } from '@mui/x-data-grid'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'
import Magnify from 'mdi-material-ui/Magnify'

interface TableHeaderProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  toggle: () => void
  value: string
  title?: React.ReactNode
  clearSearch?: () => void
  headerButton?: React.ReactNode
  displayedTexts: {
    search: string
  }
}

const TableHeader = (props: TableHeaderProps) => {
  // ** Props
  const {
    onChange,
    toggle,
    value,
    title: Title,
    clearSearch,
    headerButton: HeaderButton,
    displayedTexts
  } = props

  return (
    <Box
      sx={{
        p: 5,
        pb: 3,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: Title ? 'space-between' : 'flex-end'
      }}
    >
      {/* <Box>
        <GridToolbarFilterButton />
      </Box> */}
      {Title && <Title />}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        {HeaderButton && <HeaderButton />}
        <TextField
          size='small'
          variant='outlined'
          value={value}
          sx={{
            width: {
              xs: 1,
              sm: 'auto'
            },
            m: (theme) => theme.spacing(1, 0.5, 1.5),
            '& .MuiSvgIcon-root': {
              mr: 0.5
            },
            '& .MuiInput-underline:before': {
              borderBottom: 1,
              borderColor: 'divider'
            }
          }}
          placeholder={displayedTexts.search}
          onChange={onChange}
          InputProps={{
            startAdornment: <Magnify fontSize='small' />,
            endAdornment: (
              <IconButton size='small' title='Clear' aria-label='Clear' onClick={clearSearch}>
                <Close fontSize='small' />
              </IconButton>
            )
          }}
        />
        {toggle && (
          <Button sx={{ mb: 1, ml: 2 }} onClick={toggle} variant='contained'>
            {Title}
          </Button>
        )}
      </Box>
    </Box>
  )
}

export default TableHeader
