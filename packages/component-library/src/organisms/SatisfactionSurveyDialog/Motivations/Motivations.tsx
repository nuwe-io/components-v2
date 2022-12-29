/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react'

// Material UI
import { Box, FormLabel, MenuItem, Select } from '@mui/material'

import { Translations, useTranslations } from '@nuwe/lib'

interface MotivationsProps {
  setMotivation: {
    first: (val: any) => void
    second: (val: any) => void
    third: (val: any) => void
  }
}

export const Motivations = ({ setMotivation }: MotivationsProps) => {
  const { translate } = useTranslations()

  const [answerOne, setAnswerOne] = useState<number>(0)
  const [answerTwo, setAnswerTwo] = useState<number>(0)
  const [answerThree, setAnswerThree] = useState<number>(0)

  const options = [
    {
      label: translate('learn', 'teams')
    },
    {
      label: translate('find_a_job', 'teams')
    },
    {
      label: translate('gain_experience', 'teams')
    },
    {
      label: translate('networking', 'teams')
    },
    {
      label: translate('challenge_yourself', 'teams')
    },
    {
      label: translate('test_a_hackathon', 'teams')
    },
    {
      label: translate('have_fun', 'teams')
    },
    {
      label: translate('build_portfolio', 'teams')
    },
    {
      label: translate('teamwork', 'teams')
    },
    {
      label: translate('job_change', 'teams')
    },
    {
      label: translate('get_skills_report', 'teams')
    }
  ]

  const handleChangeAnswerOne = (e: any) => {
    const answer = parseInt(e.target.value)
    setAnswerOne(answer)
    setMotivation.first(answer)
  }
  const handleChangeAnswerTwo = (e: any) => {
    const answer = parseInt(e.target.value)
    setAnswerTwo(answer)
    setMotivation.second(answer)
  }
  const handleChangeAnswerThree = (e: any) => {
    const answer = parseInt(e.target.value)
    setAnswerThree(answer)
    setMotivation.third(answer)
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
            <FormLabel style={{ marginBottom: 15 }} component='legend'>
              <span>
                <Translations ns='teams' text='select_your_3_most_relevant_motivations' />
              </span>
            </FormLabel>
            <Box
              style={{
                display: 'flex',
                minWidth: '100%',
                justifyContent: 'center',
                flexDirection: 'column'
              }}
            >
              <Select
                value={answerOne}
                onChange={handleChangeAnswerOne}
                displayEmpty
                sx={{ mb: 5 }}
              >
                <MenuItem disabled value=''>
                  <em>
                    <Translations ns='teams' text='first' />
                  </em>
                </MenuItem>
                {options.map((option, i) => {
                  return (
                    <MenuItem key={'item-first-' + i} value={i}>
                      {option.label}
                    </MenuItem>
                  )
                })}
              </Select>
              <Select
                value={answerTwo}
                onChange={handleChangeAnswerTwo}
                disabled={!answerOne}
                displayEmpty
                sx={{ mb: 5 }}
              >
                <MenuItem disabled value=''>
                  <em>
                    <Translations ns='teams' text='second' />
                  </em>
                </MenuItem>
                {options.map((option, i) => {
                  return (
                    <MenuItem key={'item-second-' + i} value={i}>
                      {option.label}
                    </MenuItem>
                  )
                })}
              </Select>
              <Select
                value={answerThree}
                onChange={handleChangeAnswerThree}
                disabled={!answerOne || !answerTwo}
                displayEmpty
                sx={{ mb: 5 }}
              >
                <MenuItem disabled value=''>
                  <em>
                    <Translations ns='teams' text='third' />
                  </em>
                </MenuItem>
                {options.map((option, i) => {
                  return (
                    <MenuItem key={'item-third-' + i} value={i}>
                      {option.label}
                    </MenuItem>
                  )
                })}
              </Select>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
