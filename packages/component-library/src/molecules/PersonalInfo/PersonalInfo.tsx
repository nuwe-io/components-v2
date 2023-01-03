import { useTheme } from '@emotion/react'
import { TextField, Typography } from '@mui/material'
import { ChangeEventHandler } from 'react'

import { AlertCircle, CheckCircle, ChipSelector, ConditionalText } from '../../atoms'

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
  displayedTexts: {
    nameTitle: string
    nameLabel: string
    nameProfile: string
    nameFullName: string
    nameNuweName: string
  }
}

export const PersonalInfo = ({ handlerData, data, error, displayedTexts }: PersonalInfoProps) => {
  const { root, baseMargin } = useStyles()

  const changeName = (value: string) => {
    handlerData(value, 'name')
  }
  const changeUsername = (value: string) => handlerData(value, 'username')
  const isSelected = (key: string) => data.degree === key

  const theme = useTheme() as any

  return (
    <div className={root}>
      <Typography variant='h5'>{displayedTexts.nameTitle}</Typography>
      <div className={baseMargin}>
        <ConditionalText show={error} color='error' />
        <Typography variant='subtitle1'>{displayedTexts.nameLabel}</Typography>
        <TextFieldBase
          changeText={(e) => changeName(e.target.value)}
          value={data?.name}
          label={displayedTexts.nameFullName}
        />
        <TextFieldBase
          value={data?.username}
          label={displayedTexts.nameNuweName}
          changeText={(e) => changeUsername(e.target.value)}
        />
      </div>
      <div className={baseMargin}>
        <Typography variant='subtitle1'>{displayedTexts.nameProfile}</Typography>
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
