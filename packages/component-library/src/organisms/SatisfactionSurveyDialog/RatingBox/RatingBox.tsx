/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react'

// Material UI
import { Box, FormControl, FormLabel, Rating, TextField } from '@mui/material'

import { currentLanguage, Translations } from '@nuwe/lib'

interface RatingBoxProps {
  setAnswer: (answer: any) => void
  isEvent?: boolean
}

export const RatingBox = ({ setAnswer, isEvent }: RatingBoxProps) => {
  const { language } = currentLanguage()

  const [comment, setComment] = useState<string>('')
  const [level, setLevel] = useState<number>(0)

  const handleChangeLevel = (value: number | null) => {
    const selectedLevel = value || 0
    setLevel(selectedLevel)
    setAnswer({ key: 'level', value: selectedLevel })
  }

  const handleChangeComment = (e: any) => {
    const currentComment = e.target.value
    setComment(currentComment)
    setAnswer({ key: 'comment', value: currentComment })
  }

  return (
    <Box>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box
          style={{
            display: 'flex',
            minWidth: '100%',
            justifyContent: 'center',
            margin: '15px 0'
          }}
        >
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <FormControl component='fieldset'>
              <FormLabel style={{ marginBottom: 15 }} component='legend'>
                {language && language.includes('es') ? (
                  <span>
                    Del 1 al 5, ¿Qué te ha parecido el <b>{isEvent ? 'evento' : 'reto'}</b>? *
                  </span>
                ) : (
                  <span>
                    Rate the <b>{isEvent ? 'event' : 'challenge'}</b> according to your experience *
                  </span>
                )}
              </FormLabel>
              <Box
                style={{
                  display: 'flex',
                  minWidth: '100%',
                  justifyContent: 'center'
                }}
              >
                <Rating
                  value={level}
                  size='large'
                  onChange={(_e, newValue) => {
                    handleChangeLevel(newValue)
                  }}
                />
              </Box>
            </FormControl>
          </Box>
        </Box>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            justifyContent: 'flex-start',
            margin: '15px 0'
          }}
        >
          <FormControl component='fieldset'>
            <FormLabel style={{ marginBottom: 15 }} component='legend'>
              <Translations ns='teams' text='let_us_know_if_you_have_any_comments' />
            </FormLabel>
            <TextField
              id='outlined-basic'
              variant='outlined'
              multiline
              value={comment}
              onChange={handleChangeComment}
              inputProps={{ maxLength: 500 }}
            />
          </FormControl>
        </Box>
      </Box>
    </Box>
  )
}
