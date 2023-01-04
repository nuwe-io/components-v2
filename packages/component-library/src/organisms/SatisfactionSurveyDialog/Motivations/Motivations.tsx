/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react'

// Material UI
import { Box, FormLabel, MenuItem, Select } from '@mui/material'

interface MotivationsProps {
  setMotivation: {
    first: (val: any) => void
    second: (val: any) => void
    third: (val: any) => void
  }
  displayedTexts: {
    selectYour3MostRelevantMotivations: string
    first: string
    second: string
    third: string
    learn: string
    findAJob: string
    gainExperience: string
    networking: string
    challengeYourself: string
    testAHackathon: string
    haveFun: string
    buildPortfolio: string
    teamwork: string
    jobChange: string
    getSkillsReport: string
  }
}

export const Motivations = ({ setMotivation, displayedTexts }: MotivationsProps) => {
  const [answerOne, setAnswerOne] = useState<number>(0)
  const [answerTwo, setAnswerTwo] = useState<number>(0)
  const [answerThree, setAnswerThree] = useState<number>(0)

  const options = [
    {
      label: displayedTexts.learn
    },
    {
      label: displayedTexts.findAJob
    },
    {
      label: displayedTexts.gainExperience
    },
    {
      label: displayedTexts.networking
    },
    {
      label: displayedTexts.challengeYourself
    },
    {
      label: displayedTexts.testAHackathon
    },
    {
      label: displayedTexts.haveFun
    },
    {
      label: displayedTexts.buildPortfolio
    },
    {
      label: displayedTexts.teamwork
    },
    {
      label: displayedTexts.jobChange
    },
    {
      label: displayedTexts.getSkillsReport
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
              <span>{displayedTexts.selectYour3MostRelevantMotivations}</span>
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
                  <em>{displayedTexts.first}</em>
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
                  <em>{displayedTexts.second}</em>
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
                  <em>{displayedTexts.third}</em>
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
