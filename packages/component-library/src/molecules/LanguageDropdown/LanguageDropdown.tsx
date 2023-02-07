// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

// ** Icons Imports
import Translate from 'mdi-material-ui/Translate'

// ** Third Party Import

interface LanguageDropdownProps {
  settings: any
  saveSettings: any
  i18n: {
    changeLanguage: (lang: string) => void
    language: string
  }
  languages: {
    [key: string]: string
  }
}

export const LanguageDropdown = ({
  settings,
  saveSettings,
  i18n,
  languages
}: LanguageDropdownProps) => {
  // ** State
  const [anchorEl, setAnchorEl] = useState(null)

  // ** Vars
  const { layout, direction } = settings

  const handleLangDropdownOpen = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleLangDropdownClose = () => {
    setAnchorEl(null)
  }

  const handleLangItemClick = (lang: string) => {
    i18n.changeLanguage(lang)
    handleLangDropdownClose()
  }

  return (
    <Fragment>
      <IconButton
        color='inherit'
        aria-haspopup='true'
        aria-controls='customized-menu'
        onClick={handleLangDropdownOpen}
        sx={layout === 'vertical' ? { mr: 0.75 } : { mx: 0.75 }}
      >
        <Translate />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleLangDropdownClose}
        sx={{ '& .MuiMenu-paper': { mt: 4, minWidth: 130 } }}
        anchorOrigin={{ vertical: 'bottom', horizontal: direction === 'ltr' ? 'right' : 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: direction === 'ltr' ? 'right' : 'left' }}
      >
        <MenuItem
          sx={{ py: 2 }}
          selected={i18n.language === 'en'}
          onClick={() => {
            handleLangItemClick('en')
            saveSettings({ ...settings, direction: 'ltr' })
          }}
        >
          {languages.english}
        </MenuItem>
        <MenuItem
          sx={{ py: 2 }}
          selected={i18n.language === 'es'}
          onClick={() => {
            handleLangItemClick('es')
            saveSettings({ ...settings, direction: 'ltr' })
          }}
        >
          {languages.spanish}
        </MenuItem>
      </Menu>
    </Fragment>
  )
}
