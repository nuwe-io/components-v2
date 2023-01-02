/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import { useEffect, useState } from 'react'

// Material UI
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography
} from '@mui/material'

const API_URL = process.env.NEXT_PUBLIC_API_URL

interface GiveFeedbackProps {
  fromUserId: string
  toUserId: string
  projectId: string
  setFeedback: (feedback: any) => void
  displayedTexts: {
    giveFeedbackLabel: string
    giveFeedbackText: string
    teamworkLabel: string
    analysisLabel: string
    resolutionLabel: string
    communicationLabel: string
    createTeamError: string
  }
}

export const GiveFeedback = ({
  fromUserId,
  toUserId,
  projectId,
  setFeedback,
  displayedTexts
}: GiveFeedbackProps) => {
  const [showDialog, setShowDialog] = useState<boolean>(false)

  return (
    <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center' }}>
      <Chip
        label={displayedTexts.giveFeedbackLabel}
        color='error'
        size='small'
        style={{
          marginLeft: 10,
          width: 135,
          cursor: 'pointer',
          borderRadius: 4
        }}
        onClick={() => {
          setShowDialog(!showDialog)
        }}
      />
      <GiveFeedbackDialog
        fromUserId={fromUserId}
        toUserId={toUserId}
        projectId={projectId}
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        setFeedback={setFeedback}
        displayedTexts={displayedTexts}
      />
    </div>
  )
}

interface GiveFeedbackDialogProps {
  fromUserId: string
  toUserId: string
  projectId: string
  showDialog: boolean
  setShowDialog: (showDialog: boolean) => void
  setFeedback: (feedback: any) => void
  displayedTexts: {
    giveFeedbackLabel: string
    giveFeedbackText: string
    teamworkLabel: string
    analysisLabel: string
    resolutionLabel: string
    communicationLabel: string
    createTeamError: string
  }
}

const GiveFeedbackDialog = ({
  fromUserId,
  toUserId,
  projectId,
  showDialog,
  setShowDialog,
  setFeedback,
  displayedTexts
}: GiveFeedbackDialogProps) => {
  const [teamwork, setTeamwork] = useState<any>(null)
  const [analysis, setAnalysis] = useState<any>(null)
  const [resolution, setResolution] = useState<any>(null)
  const [communication, setCommunication] = useState<any>(null)
  const [error, setError] = useState<boolean>(false)
  const [attributes, setAttributes] = useState<any[]>([])

  useEffect(() => {
    const getAttributes = async () => {
      const res = await axios.get(`${API_URL}attributes`)
      setAttributes(res.data.data)
    }

    getAttributes()
  }, [])

  const createFeedback = () => {
    if (!teamwork || !analysis || !resolution || !communication) return setError(true)

    const feedback = {
      skills: {
        softSkills: [
          {
            id: attributes.find((current) => current.name === 'Team')._id,
            points: parseInt(teamwork)
          },
          {
            id: attributes.find((current) => current.name === 'Analysis')._id,
            points: parseInt(analysis)
          },
          {
            id: attributes.find((current) => current.name === 'Resolution')._id,
            points: parseInt(resolution)
          },
          {
            id: attributes.find((current) => current.name === 'Communication')._id,
            points: parseInt(communication)
          }
        ]
      },
      type: 'points',
      from: {
        id: fromUserId,
        type: 'user'
      },
      to: {
        id: toUserId,
        type: 'user'
      },
      project: projectId
    }

    axios.post(`${API_URL}feedbacks/user`, feedback, { withCredentials: true }).then(() => {
      setFeedback({ userId: toUserId })
      setShowDialog(false)
    })
  }

  const handleChangeTeam = (e: any) => setTeamwork(e.target.value)
  const handleChangeAnalysis = (e: any) => setAnalysis(e.target.value)
  const handleChangeResolution = (e: any) => setResolution(e.target.value)
  const handleChangeCommunication = (e: any) => setCommunication(e.target.value)

  const Options = () => {
    return (
      <>
        <FormControlLabel value='1' control={<Radio />} label='1' />
        <FormControlLabel value='2' control={<Radio />} label='2' />
        <FormControlLabel value='3' control={<Radio />} label='3' />
        <FormControlLabel value='4' control={<Radio />} label='4' />
        <FormControlLabel value='5' control={<Radio />} label='5' />
      </>
    )
  }

  return (
    <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', p: 10, maxWidth: 400 }}>
        <DialogTitle sx={{ pt: 0, pl: 0 }}>{displayedTexts.giveFeedbackLabel}</DialogTitle>
        <Box sx={{ mb: 7 }}>{displayedTexts.giveFeedbackText}</Box>
        <FormControl component='fieldset'>
          <FormLabel component='legend' required>
            {displayedTexts.teamworkLabel}
          </FormLabel>
          <RadioGroup
            aria-label='Team'
            name='Team'
            value={teamwork}
            onChange={handleChangeTeam}
            row
            style={{ marginBottom: 20 }}
          >
            <Options />
          </RadioGroup>
          <FormLabel component='legend' required>
            {displayedTexts.analysisLabel}
          </FormLabel>
          <RadioGroup
            aria-label='Analysis'
            name='Analysis'
            value={analysis}
            onChange={handleChangeAnalysis}
            row
            style={{ marginBottom: 20 }}
          >
            <Options />
          </RadioGroup>
          <FormLabel component='legend' required>
            {displayedTexts.resolutionLabel}
          </FormLabel>
          <RadioGroup
            aria-label='Resolution'
            name='Resolution'
            value={resolution}
            onChange={handleChangeResolution}
            row
            style={{ marginBottom: 20 }}
          >
            <Options />
          </RadioGroup>
          <FormLabel component='legend' required>
            {displayedTexts.communicationLabel}
          </FormLabel>
          <RadioGroup
            aria-label='Communication'
            name='Communication'
            value={communication}
            onChange={handleChangeCommunication}
            row
            style={{ marginBottom: 10 }}
          >
            <Options />
          </RadioGroup>
        </FormControl>
        {error && (
          <Typography align='center' style={{ color: 'orangered', margin: '10px 0' }}>
            {displayedTexts.createTeamError}
          </Typography>
        )}
        <Button onClick={() => createFeedback()} variant='contained' sx={{ mt: 5 }}>
          Enviar
        </Button>
      </DialogContent>
    </Dialog>
  )
}
