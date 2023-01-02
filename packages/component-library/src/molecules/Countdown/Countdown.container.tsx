import { Paper, Typography } from '@mui/material'
import { useStyles } from './style'

interface PanelProps {
  n: number
  displayedTexts: {
    label: string
  }
}

const Panel = ({ n, displayedTexts }: PanelProps) => {
  const classes = useStyles()

  return (
    <div className={classes.panel}>
      <Typography variant='h5' className={classes.num}>
        {n < 10 ? '0' + n : n}
      </Typography>
      <Typography className={classes.txt}>{displayedTexts.label}</Typography>
    </div>
  )
}

interface CountdownProps {
  title: string
  days: number
  hours: number
  minutes: number
  timeOut: boolean
  day: number
  month: number
  year: number
  language: string
  isEvent: boolean
  displayedTexts: {
    daysLabel: string
    hoursLabel: string
    minutesLabel: string
    title: string
    timeoutLabel: string
  }
}

export const CountdownDummy = ({
  title,
  days,
  hours,
  minutes,
  timeOut,
  day,
  month,
  year,
  language,
  isEvent,
  displayedTexts
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
              {displayedTexts.title}
            </Typography>
          )}
          <div className={classes.counter}>
            <div className={classes.panels}>
              <Panel n={days > 0 ? days : 0} displayedTexts={{ label: displayedTexts.daysLabel }} />
              <Typography variant='h5' className={classes.divider}>
                :
              </Typography>
              <Panel
                n={hours > 0 ? hours : 0}
                displayedTexts={{ label: displayedTexts.hoursLabel }}
              />
              <Typography variant='h5' className={classes.divider}>
                :
              </Typography>
              <Panel
                n={minutes > 0 ? minutes : 0}
                displayedTexts={{ label: displayedTexts.minutesLabel }}
              />
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
                  {displayedTexts.timeoutLabel}
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
