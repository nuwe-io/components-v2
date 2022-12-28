import { FormControl, MenuItem, Select } from '@mui/material'

import TranslateIcon from '@mui/icons-material/translate'
import useTranslation from 'next-translate/useTranslation'

export const SwitchLang = () => {
  const { t, lang } = useTranslation()

  const handleChange = (value: string) => {
    lang.changeLanguage(value)
  }

  return (
    <FormControl style={{ position: 'relative', margin: '10px' }}>
      <Select
        startAdornment={<TranslateIcon sx={{ marginRight: '10px' }} />}
        margin='dense'
        size='small'
        value={lang || 'en'}
        defaultValue={lang}
        onChange={(e) => handleChange(e.target.value)}
      >
        <MenuItem value='en'>{t('en')}</MenuItem>
        <MenuItem value='es'>{t('es')}</MenuItem>
      </Select>
    </FormControl>
  )
}
