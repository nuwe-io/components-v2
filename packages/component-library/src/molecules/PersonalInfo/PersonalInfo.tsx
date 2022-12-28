import { useTheme } from '@emotion/react'
import { TextField, Typography } from '@mui/material'
import { ChangeEventHandler } from 'react'

import { AlertCircle, CheckCircle, ChipSelector, ConditionalText } from '../../atoms'

import { Translations, useTranslations } from '@nuwe/lib'

import { useStyles } from './styles'

interface TextFieldBaseProps {
  changeText: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined
  label: string
  value: string
}

const TextFieldBase = ({ changeText, label, value }: TextFieldBaseProps) => {
  const { baseMargin } = useStyles()

  return (
    <TextField
      fullWidth
      type='text'
      size='small'
      value={value}
      variant='outlined'
      autoFocus
      label={label}
      className={baseMargin}
      onChange={changeText}
    />
  )
}

const options = ['TRAINEE', 'JUNIOR', 'MID SENIOR', 'SENIOR', 'TECH LEAD']

interface PersonalInfoProps {
  handlerData: (value: string, key: string) => void
  data: any
  error: string
}

export const PersonalInfo = ({ handlerData, data, error }: PersonalInfoProps) => {
  const { root, baseMargin } = useStyles()

  const { translate } = useTranslations()
  const nameTranslate = translate('name_full_name', 'auth')
  const usernameTranslate = translate('name_nuwe_name', 'auth')

  const changeName = (value: string) => {
    handlerData(value, 'name')
  }
  const changeUsername = (value: string) => handlerData(value, 'username')
  const isSelected = (key: string) => data.degree === key

  const theme = useTheme() as any

  return (
    <div className={root}>
      <Typography variant='h5'>
        <Translations ns='auth' text='name_title' />
      </Typography>
      <div className={baseMargin}>
        <ConditionalText show={error} color='error' />
        <Typography variant='subtitle1'>
          <Translations ns='auth' text='name_label' />
        </Typography>
        <TextFieldBase
          changeText={(e) => changeName(e.target.value)}
          value={data?.name}
          label={nameTranslate}
        />
        <TextFieldBase
          value={data?.username}
          label={usernameTranslate}
          changeText={(e) => changeUsername(e.target.value)}
        />
      </div>
      <div className={baseMargin}>
        <Typography variant='subtitle1'>
          {<Translations ns='auth' text='name_profile' />}
        </Typography>
        <div style={{ marginTop: '10px' }}>
          <ChipSelector
            condition={isSelected}
            options={options}
            updateSelected={(value) => handlerData(value, 'degree')}
            defaultAvatar={<AlertCircle size='15px' color='#FFF' />}
            selectedAvatar={<CheckCircle size='15px' color={theme.palette.primary.main} />}
          />
        </div>
      </div>
    </div>
  )
}
