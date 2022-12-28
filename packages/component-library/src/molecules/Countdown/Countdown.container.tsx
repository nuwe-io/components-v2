import { Paper, Typography } from '@mui/material'
import { Translations } from 'src/shared/utils/translation/Translations'
import { useStyles } from './style'

interface PanelProps {
  label: string
  n: number
}

const Panel = ({ label, n }: PanelProps) => {
  const classes = useStyles()

  return (
    <div className={classes.panel}>
      <Typography variant='h5' className={classes.num}>
        {n < 10 ? '0' + n : n}
      </Typography>
      <Typography className={classes.txt}>
        <Translations ns={'events'} text={label} />
      </Typography>
    </div>
  )
}

interface CountdownProps {
  title: string
  days: number
  hours: number
  minutes: number
  timeOut: boolean
  daysLabel: string
  hoursLabel: string
  minutesLabel: string
  timeoutLabel: string
  day: number
  month: number
  year: number
  language: string
  isEvent: boolean
}

export const CountdownDummy = ({
  title,
  days,
  hours,
  minutes,
  timeOut,
  daysLabel,
  hoursLabel,
  minutesLabel,
  timeoutLabel,
  day,
  month,
  year,
  language,
  isEvent
}: CountdownProps) => {
  const classes = useStyles()
  const formattedDay = day < 10 ? '0' + day : day
  const formattedMonth = month < 10 ? '0' + month : month

  return (
    <>
      {!timeOut && (
        <Paper className={classes.paper} elevation={0}>
          {title && (
            <Typography variant='subtitle1' component='h2' align='center' className={classes.title}>
              <Translations ns={'events'} text={title} />
            </Typography>
          )}
          <div className={classes.counter}>
            <div className={classes.panels}>
              <Panel label={daysLabel} n={days > 0 ? days : 0} />
              <Typography variant='h5' className={classes.divider}>
                :
              </Typography>
              <Panel label={hoursLabel} n={hours > 0 ? hours : 0} />
              <Typography variant='h5' className={classes.divider}>
                :
              </Typography>
              <Panel label={minutesLabel} n={minutes > 0 ? minutes : 0} />
            </div>
          </div>
        </Paper>
      )}
      {timeOut && (
        <div>
          {isEvent && (
            <Paper className={classes.paper} elevation={0}>
              <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                <Typography variant='subtitle1' component='h2' className={classes.title}>
                  <Translations ns={'events'} text={timeoutLabel} />
                </Typography>
              </div>
            </Paper>
          )}
          <div style={{ display: 'flex', width: '100%', justifyContent: 'center', marginTop: 5 }}>
            <Typography variant='h5' align='center' style={{ fontSize: '1.5rem', fontWeight: 400 }}>
              {`${language?.includes('en') ? formattedMonth : formattedDay}-${
                language?.includes('en') ? formattedDay : formattedMonth
              }-${year}`}
            </Typography>
          </div>
        </div>
      )}
    </>
  )
}
