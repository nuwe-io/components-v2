import { Box, Button, Dialog, DialogContent, Divider, Typography } from '@mui/material'

import { Motivations } from './Motivations'
import { RatingBox } from './RatingBox'

interface SatisfactionSurveyDialogViewProps {
  popup: any
  labels: any
  eventId: string
  setChallengeAnswers: (answers: any) => void
  setEventAnswers: (answers: any) => void
  setMotivation: {
    first: (val: any) => void
    second: (val: any) => void
    third: (val: any) => void
  }
  handleSubmit: () => void
  showError: boolean
  displayedTexts: {
    letUsKnowIfYouHaveAnyComments: string
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

export const SatisfactionSurveyDialogView = ({
  popup,
  labels,
  eventId,
  setChallengeAnswers,
  setEventAnswers,
  setMotivation,
  handleSubmit,
  showError,
  displayedTexts
}: SatisfactionSurveyDialogViewProps) => {
  const { success, close, submit, error } = labels()

  return (
    <Dialog open={popup.open}>
      <DialogContent>
        <Typography variant='h6' align='center' style={{ marginBottom: 15, marginTop: 10 }}>
          {success}
        </Typography>
        <RatingBox setAnswer={setChallengeAnswers} displayedTexts={displayedTexts} />
        {eventId && (
          <>
            <Divider />
            <RatingBox setAnswer={setEventAnswers} isEvent displayedTexts={displayedTexts} />
            <Motivations setMotivation={setMotivation} displayedTexts={displayedTexts} />
          </>
        )}
        {showError && (
          <Typography align='center' style={{ color: 'orangered', margin: '10px 0px' }}>
            {error}
          </Typography>
        )}
        <Box style={{ margin: '10px 0px', display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant='outlined' color='secondary' sx={{ mr: 3 }} onClick={() => popup.close()}>
            {close}
          </Button>
          <Button variant='contained' onClick={handleSubmit}>
            {submit}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  )
}
