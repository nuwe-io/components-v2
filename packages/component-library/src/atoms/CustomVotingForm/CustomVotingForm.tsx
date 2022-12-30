import { useEffect, useMemo, useReducer } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Pagination from '@mui/material/Pagination'
import { useTheme } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

import { ActionType, reducer } from './form-reducer'
import { DEFAULT_STATE } from './test-data'

import { useAuthStatus } from '@shared/auth'
import toast from 'react-hot-toast'

const handlePost = async (state: any, teamId: string, userID: string, sourceID: string) => {
  const data = {
    author: userID,
    comments: state.comments,
    questions: state.questions.map((q: any) => {
      return { question: q.id, rating: q.rating }
    }),
    juryAverageScore:
      state?.questions?.reduce((acc: any, q: any) => acc + q.rating, 0) / state.questions.length
  }

  await toast.promise(
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/polls/update-results/${state.pollId}`, {
      method: 'put',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) return Promise.reject(res.error)
        return Promise.resolve(res)
      }),
    {
      loading: 'Saving your vote...',
      success: 'Vote saved!',
      error: 'Error saving your vote'
    }
  )
}

const fetchInitialData = async (
  teamId: string,
  projectId: string,
  authorId: string,
  title: string,
  cancelQuestionFetch: () => void,
  setPollInitState: (data: any, poll: any, title: string) => void
) => {
  const data = { description: '', questions: [], comments: '' }
  const foundPoll = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/polls?"source.id"=${projectId}&to=${teamId}`
  ).catch(() => console.log('Error loading polls'))
  const jsonPoll = foundPoll ? await foundPoll.json() : []

  if (jsonPoll.length === 0) return cancelQuestionFetch()

  const poll = jsonPoll[0]
  data.description = poll?.description

  const fetchedQuestions = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/questions/get-by-poll-id/${poll?.id}`
  ).catch(() => {
    console.log('Error loading questions')
    cancelQuestionFetch()
  })

  const jsonQuestions = fetchedQuestions ? await fetchedQuestions.json() : []
  if (jsonQuestions.error) return cancelQuestionFetch()

  // Check if author has already voted
  const authorVoted = poll.results.find((r: any) => r.author === authorId)

  if (authorVoted) data.comments = authorVoted.comments

  data.questions = jsonQuestions.map((q: any) => {
    let rating = 1
    if (authorVoted) rating = authorVoted.questions.find((qq: any) => qq.question === q.id).rating
    return {
      id: q.id,
      question: q.question,
      trait: q.traits[0],
      rating: rating
    }
  })

  setPollInitState(data, poll, title)
}

interface VotingFormItemProps {
  isMobile: boolean
  index: number
  question: any
  onChange: (data: any) => void
}

const VotingFormItem = ({ isMobile, index, question, onChange }: VotingFormItemProps) => {
  return (
    <Box>
      <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ fontWeight: 'bold' }}>{`${
        index + 1
      }  ${question.question}`}</Typography>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          mt: 4,
          mb: 10,
          alignItems: 'center',
          justifyContent: 'space-around'
        }}
      >
        <Typography variant={isMobile ? 'caption' : 'body1'}> {question.trait}</Typography>
        <Pagination
          variant='outlined'
          size='small'
          page={question.rating}
          color='primary'
          onChange={(_event, pageNumber) => {
            onChange({ index: index, rating: pageNumber })
          }}
          count={5}
          hidePrevButton
          hideNextButton
        />
        <Typography variant={isMobile ? 'caption' : 'body1'}> {question.trait}</Typography>
      </Box>
    </Box>
  )
}

interface VotingFormBodyProps {
  isMobile: boolean
  pollFound: boolean
  state: any
  handleCommentChange: (event: any) => void
  handleRatingSelection: (data: any) => void
}

const VotingFormBody = ({
  isMobile,
  pollFound,
  state,
  handleCommentChange,
  handleRatingSelection
}: VotingFormBodyProps) => {
  return (
    <>
      <DialogTitle id='score-team-dialog'>
        {!pollFound ? 'There is not a poll associated with this project' : state.title}
      </DialogTitle>
      <DialogContent sx={{ minWidth: '350px' }}>
        <div className='descriptions'>
          <p>{state.description}</p>
        </div>

        {pollFound && (
          <>
            <div>
              {state.questions.map((q: any, i: number) => (
                <VotingFormItem
                  isMobile={isMobile}
                  key={i}
                  question={q}
                  index={i}
                  onChange={handleRatingSelection}
                />
              ))}
            </div>
            <div className='comments-section'>
              <p>Write your comments below:</p>
              <TextField
                fullWidth
                multiline
                id='outlined-multiline-static'
                className='text-section'
                rows={4}
                value={state.comments}
                onChange={(e) => handleCommentChange(e.target.value)}
              />
            </div>
          </>
        )}
      </DialogContent>
    </>
  )
}

interface CustomVotingFormProps {
  handleClose: () => void
  teamId: string
  projectId: string
  title: string
  open: boolean
}

export const CustomVotingForm = ({
  handleClose,
  teamId,
  projectId,
  title,
  open
}: CustomVotingFormProps) => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE)
  const { user } = useAuthStatus()

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'))

  const handleCommentChange = (comments: string) =>
    dispatch({ actionType: ActionType.UPDATE_COMMENTS, payload: comments })

  const handleRatingSelection = ({ index, rating }: any) => {
    const action = {
      actionType: ActionType.UPDATE_QUESTION,
      payload: { index: index, rating: rating }
    }
    dispatch(action)
  }

  const cancelQuestionFetch = () => {
    dispatch({ actionType: ActionType.POLL_NOT_FOUND })
    toast.error('No poll found for this project.')
  }

  const setPollInitState = (data: any, poll: any, title: string) => {
    dispatch({
      actionType: ActionType.INIT_QUESTIONS,
      payload: {
        title,
        pollId: poll.id,
        description: data.description,
        questions: data.questions,
        comments: data.comments
      }
    })
    toast.success('Teams questions loaded successfully.')
  }

  useEffect(() => {
    if (open)
      fetchInitialData(teamId, projectId, user?.id, title, cancelQuestionFetch, setPollInitState)
  }, [projectId, teamId, title, open, user?.id])

  const pollFound = useMemo(
    () => !state.loading && state.pollExists,
    [state.loading, state.pollExists]
  )

  const submitScore = () => {
    handlePost(state, teamId, user._id, projectId)
    handleClose()
  }
  return (
    <Dialog
      scroll='paper'
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby='score-team-dialog'
    >
      {state.loading ? (
        <DialogContent>
          <CircularProgress disableShrink sx={{ mt: 6 }} />
        </DialogContent>
      ) : (
        <VotingFormBody
          isMobile={isMobile}
          pollFound={pollFound}
          state={state}
          handleCommentChange={handleCommentChange}
          handleRatingSelection={handleRatingSelection}
        />
      )}
      <DialogActions>
        {pollFound && (
          <Button
            disabled={projectId === ''}
            variant='contained'
            color='primary'
            size='small'
            onClick={submitScore}
          >
            {'submit'}
          </Button>
        )}

        <Button color='secondary' size='small' variant='outlined' onClick={handleClose}>
          {'cancel'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
