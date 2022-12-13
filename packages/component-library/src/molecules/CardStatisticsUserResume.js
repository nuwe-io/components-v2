import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Grid,
  Typography
} from '@mui/material'
import { currentLanguage } from '@shared/lib'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import CellphoneLink from 'mdi-material-ui/CellphoneLink'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import TrendingUp from 'mdi-material-ui/TrendingUp'
import Link from 'next/link'
import { PropTypes } from 'prop-types'
import { Fragment, useState } from 'react'

import CustomAvatar from 'src/shared/materio/@core/components/mui/avatar'
import { Translations } from 'src/shared/utils/translation/Translations'

const salesData = [
  {
    stats: '245k',
    title: 'Sales',
    color: 'primary',
    icon: <TrendingUp />
  },
  {
    stats: '12.5k',
    title: 'Customers',
    color: 'success',
    icon: <AccountOutline />
  },
  {
    stats: '1.54k',
    color: 'warning',
    title: 'Products',
    icon: <CellphoneLink />
  },
  {
    stats: '$88k',
    color: 'info',
    title: 'Revenue',
    icon: <CurrencyUsd />
  }
]

const renderStats = (data) => {
  return data.map((item, index) => {
    console.log(item)
    return (
      <Grid style={{ margin: '1rem' }} item xs={6} md={3} key={index}>
        <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
          <CustomAvatar variant='rounded' color={item.color} sx={{ mr: 3, boxShadow: 3 }}>
            {item.icon}
          </CustomAvatar>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='caption'>{item.title}</Typography>
            <Typography variant='h6'>{item.stats}</Typography>
          </Box>
        </Box>
      </Grid>
    )
  })
}

const CardStatisticsUserResume = ({ data, profile, showProjectsButton }) => {
  const { date } = currentLanguage()
  const { format, options } = date

  const information = data || salesData
  const [seeProjects, setSeeProjects] = useState(false)

  return (
    <Fragment>
      <Card>
        <CardHeader
          title={<Translations ns='profile' text='profile_resume' />}
          titleTypographyProps={{
            sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
          }}
          action={
            showProjectsButton && (
              <Button onClick={() => setSeeProjects((pre) => !pre)}>
                {!seeProjects ? (
                  <Translations ns='profile' text='profile_resume_actions' />
                ) : (
                  <Translations ns='profile' text='profile_projects_actions_clouse' />
                )}
              </Button>
            )
          }
        />
        <CardContent>
          <Grid container>{renderStats(information)}</Grid>
        </CardContent>
      </Card>
      {seeProjects && (
        <Grid style={{ margin: '1rem 0rem' }} container>
          <Box
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '10px',
              width: '100%'
            }}
          >
            {profile.data.projects.map((item) => {
              const submittedAt = new Date(item.createdAt).toLocaleDateString(format, options)

              return (
                <Card key={item.id}>
                  <CardContent
                    sx={{
                      minHeight: '100%',
                      maxHeight: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Box>
                      <Link
                        href={'/challenges/' + item?.challenge?.challengeURL}
                        rel='noopener'
                        target='_blank'
                        onClick={(e) => e.preventDefault()}
                      >
                        <Typography
                          sx={{
                            lineHeight: '2rem !important',
                            letterSpacing: '0.15px !important',
                            fontSize: '.9rem !important',
                            fontWeight: 'bold',
                            mb: 2,
                            cursor: 'pointer'
                          }}
                        >
                          {item?.challenge?.title}
                        </Typography>
                      </Link>
                      <Typography variant='body2' sx={{ mb: 5 }}>
                        {item.description}
                      </Typography>
                      <Box
                        style={{
                          margin: '10px 0px',
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
                          gap: '10px'
                        }}
                      >
                        {item.technologies.map((skill) => (
                          <Chip
                            variant='outlined'
                            size='small'
                            key={skill.name}
                            color='primary'
                            label={skill.name}
                          />
                        ))}
                      </Box>
                    </Box>
                    <Box>
                      <Divider sx={{ mt: 6, mb: 3 }} />
                      <Typography
                        sx={{
                          letterSpacing: '0.15px !important',
                          fontSize: '.8rem !important'
                        }}
                      >
                        <Translations ns='profile' text='submitted_at' />:{' '}
                        {submittedAt.charAt(0).toUpperCase() + submittedAt.slice(1)}.
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                        <Link href={item.projectURL} passHref={true}>
                          <Button
                            style={{ fontSize: '11px' }}
                            size='small'
                            variant='contained'
                            sx={{ mr: 2 }}
                            color='secondary'
                          >
                            <Translations ns='profile' text='view_repository' />
                          </Button>
                        </Link>
                        {profile?.isAuthor && (
                          <Link href={`/report/${item.id}`} passHref={true}>
                            <Button
                              style={{ fontSize: '11px' }}
                              size='small'
                              variant='contained'
                              color='primary'
                            >
                              <Translations ns='profile' text='view_report'></Translations>
                            </Button>
                          </Link>
                        )}
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              )
            })}
          </Box>
        </Grid>
      )}
    </Fragment>
  )
}

CardStatisticsUserResume.propTypes = {
  data: PropTypes.array,
  profile: PropTypes.object,
  showProjectsButton: PropTypes.bool
}

CardStatisticsUserResume.defaultProps = {
  data: salesData,
  profile: {},
  showProjectsButton: false
}

export default CardStatisticsUserResume
