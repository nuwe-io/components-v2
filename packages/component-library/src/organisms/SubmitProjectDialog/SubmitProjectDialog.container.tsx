import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Skeleton,
  TextField,
  Typography
} from '@mui/material'
import { ButtonLoader } from '../../atoms'

interface SubmitProjectDialogViewProps {
  challenge: any
  open: boolean
  handleData: any
  techsInProjects: any
  data: any
  setSendSolution: (sendSolution: boolean) => void
  submitSolution: () => void
  loader: boolean
  loading: boolean
  dataScienceChecksError: any
  displayedTexts: {
    supercoolSolutionBuiltWithSuperpowers: string
    submitFormTitle: string
    inputSolutionDescription: string
    inputRepoLink: string
    inputSolutionStack: string
    dataRepoError: string
    actionCancel: string
    actionSubmit: string
  }
}

export const SubmitProjectDialogView = ({
  challenge,
  open,
  handleData,
  techsInProjects,
  data,
  setSendSolution,
  submitSolution,
  loader,
  loading,
  dataScienceChecksError,
  displayedTexts
}: SubmitProjectDialogViewProps) => {
  return (
    <Dialog open={open}>
      {loading ? (
        <DialogContent>
          <Skeleton
            variant='rectangular'
            style={{ borderRadius: '5px' }}
            width={'400px'}
            height={'450px'}
          />
        </DialogContent>
      ) : (
        <DialogContent>
          <DialogTitle>
            {displayedTexts.submitFormTitle} {challenge?.title}
          </DialogTitle>
          <DialogContent>
            <div style={{ margin: '15px 0px' }}>
              <Typography style={{ margin: '5px 0px' }}>
                {displayedTexts.inputSolutionDescription}
              </Typography>
              <TextField
                fullWidth
                variant='outlined'
                size='small'
                margin='dense'
                multiline
                onChange={(e) => handleData(e, null, 'description')}
                maxRows={6}
                label={displayedTexts.supercoolSolutionBuiltWithSuperpowers}
              />
            </div>
            <div style={{ margin: '15px 0px' }}>
              <Typography style={{ margin: '5px 0px' }}>{displayedTexts.inputRepoLink}</Typography>
              <TextField
                onChange={(e) => handleData(e, null, 'projectURL')}
                fullWidth
                size='small'
                margin='dense'
                variant='outlined'
                label='i.e: https://github.com/gagocarrilloedgar/nwe'
              />
            </div>
            <div style={{ margin: '15px 0px' }}>
              <Typography style={{ margin: '5px 0px' }}>
                {displayedTexts.inputSolutionStack}
              </Typography>
              <div>
                {techsInProjects &&
                  techsInProjects.map((key: any) => (
                    <Chip
                      style={{
                        padding: '0rem 1rem',
                        marginRight: '10px',
                        marginTop: '10px',
                        borderColor: data?.technologies?.includes(key) ? '#569B51' : '',
                        color: data?.technologies?.includes(key) ? '#569B51' : ''
                      }}
                      clickable
                      label={key}
                      onClick={(e: any) =>
                        handleData(e, [...data.technologies, key], 'technologies')
                      }
                      key={key}
                      variant='outlined'
                    />
                  ))}
              </div>
            </div>
            {dataScienceChecksError && (
              <div style={{ marginTop: '20px' }}>
                <Typography align='center' sx={{ color: 'orangered' }}>
                  {displayedTexts.dataRepoError}
                </Typography>
              </div>
            )}
          </DialogContent>
          <DialogActions>
            <Button
              size='small'
              //loading={loader}
              disabled={loader}
              color='secondary'
              variant='outlined'
              onClick={() => setSendSolution(false)}
            >
              {displayedTexts.actionCancel}
            </Button>
            <ButtonLoader
              loading={loader}
              disabled={loader}
              /* size='small' */ onClick={submitSolution}
            >
              {displayedTexts.actionSubmit}
            </ButtonLoader>
          </DialogActions>
        </DialogContent>
      )}
    </Dialog>
  )
}
