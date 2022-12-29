import { ButtonLoader } from '@components/atoms'
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

import { Translations, useTranslations } from '@nuwe/lib'

interface SubmitProjectDialogViewProps {
  challenge: any
  open: boolean
  handlerData: (e: any, index: number | null, type: string) => void
  techsInProjects: any
  data: any
  setSendSolution: (sendSolution: boolean) => void
  submitSolution: () => void
  loader: boolean
  loading: boolean
  dataScienceChecksError: any
}

export const SubmitProjectDialogView = ({
  challenge,
  open,
  handlerData,
  techsInProjects,
  data,
  setSendSolution,
  submitSolution,
  loader,
  loading,
  dataScienceChecksError
}: SubmitProjectDialogViewProps) => {
  const { translate } = useTranslations()

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
            <Translations ns='challenge' text='submit_form_title' /> {challenge?.title}
          </DialogTitle>
          <DialogContent>
            <div style={{ margin: '15px 0px' }}>
              <Typography style={{ margin: '5px 0px' }}>
                <Translations ns='challenge' text='input_solution_description' />
              </Typography>
              <TextField
                fullWidth
                variant='outlined'
                size='small'
                margin='dense'
                multiline
                onChange={(e) => handlerData(e, null, 'description')}
                maxRows={6}
                label={translate('supercool_solution_built_with_superpowers', 'teams')}
              />
            </div>
            <div style={{ margin: '15px 0px' }}>
              <Typography style={{ margin: '5px 0px' }}>
                <Translations ns='challenge' text='input_repo_link' />
              </Typography>
              <TextField
                onChange={(e) => handlerData(e, null, 'projectURL')}
                fullWidth
                size='small'
                margin='dense'
                variant='outlined'
                label='i.e: https://github.com/gagocarrilloedgar/nwe'
              />
            </div>
            <div style={{ margin: '15px 0px' }}>
              <Typography style={{ margin: '5px 0px' }}>
                <Translations ns='challenge' text='input_solution_stack' />
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
                      onClick={(e) => handlerData(e, [...data.technologies, key], 'technologies')}
                      key={key}
                      variant='outlined'
                    />
                  ))}
              </div>
            </div>
            {dataScienceChecksError && (
              <div style={{ marginTop: '20px' }}>
                <Typography align='center' sx={{ color: 'orangered' }}>
                  <Translations ns='challenge' text='data_repo_error' />
                </Typography>
              </div>
            )}
          </DialogContent>
          <DialogActions>
            <Button
              size='small'
              loading={loader}
              disabled={loader}
              color='secondary'
              variant='outlined'
              onClick={() => setSendSolution(false)}
            >
              <Translations ns='challenge' text='action_cancel' />
            </Button>
            <ButtonLoader loading={loader} disabled={loader} size='small' onClick={submitSolution}>
              <Translations ns='challenge' text='action_submit' />
            </ButtonLoader>
          </DialogActions>
        </DialogContent>
      )}
    </Dialog>
  )
}
