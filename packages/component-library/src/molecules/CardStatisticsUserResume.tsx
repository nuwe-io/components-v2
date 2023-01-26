import Link from 'next/link'
import { Fragment, useId, useState } from 'react'

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

import { AccountOutline } from 'mdi-material-ui'
import CellphoneLink from 'mdi-material-ui/CellphoneLink'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import TrendingUp from 'mdi-material-ui/TrendingUp'

import { currentLanguage } from '@nuwe/lib'

import { SimpleAvatar } from '../atoms'

type dataType = {
  stats: string
  title: string
  color: 'primary' | 'secondary' | 'warning' | 'info' | 'success' | 'error' | undefined
  icon: JSX.Element
}

const salesData: dataType[] = [
  {
    stats: '245k',
    title: 'Sales',
    color: 'primary',
    icon: <TrendingUp />
  },
  {
    stats: '12.5k',
    title: 'Customers',
    color: 'secondary',
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

const renderStats = (data: dataType[], id: string) => {
  return data.map((item: dataType) => {
    return (
      <Grid style={{ margin: '1rem' }} item xs={6} md={3} key={id}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SimpleAvatar variant='rounded' color={item.color} sx={{ mr: 3, boxShadow: 3 }}>
            {item.icon}
          </SimpleAvatar>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='caption'>{item.title}</Typography>
            <Typography variant='h6'>{item.stats}</Typography>
          </Box>
        </Box>
      </Grid>
    )
  })
}

interface CardStatisticsUserResumeProps {
  data?: dataType[]
  profile: {
    isAuthor: boolean
    data: {
      projects: {
        id: string
        description: string
        createdAt: string
        challenge: {
          challengeURL: string
          title: string
        }
        technologies: {
          name: string
        }[]
        projectURL: string
      }[]
    }
  }
  showProjectsButton?: boolean
  displayedTexts: {
    profileResume: string
    profileResumeActions: string
    profileProjectsActionsClose: string
    submittedAt: string
    viewRepository: string
    viewReport: string
  }
}

const onClickSeeProjects = (setSeeProjects: any) => () => {
  setSeeProjects((prev: boolean) => !prev)
}

const onLinkClick = (event: any) => () => event.preventDefault()

export const CardStatisticsUserResume = ({
  data,
  profile,
  showProjectsButton,
  displayedTexts
}: CardStatisticsUserResumeProps) => {
  const { date } = currentLanguage()
  const { format, options } = date as any

  const information = data || salesData
  const [seeProjects, setSeeProjects] = useState<boolean>(false)

  const id = useId()

  return (
    <Fragment>
      <Card>
        <CardHeader
          title={displayedTexts.profileResume}
          titleTypographyProps={{
            sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
          }}
          action={
            showProjectsButton && (
              <Button onClick={onClickSeeProjects(setSeeProjects)}>
                {!seeProjects
                  ? displayedTexts.profileResumeActions
                  : displayedTexts.profileProjectsActionsClose}
              </Button>
            )
          }
        />
        <CardContent>
          <Grid container>{renderStats(information, id)}</Grid>
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
                        onClick={onLinkClick}
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
                        {displayedTexts.submittedAt}:{' '}
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
                            {displayedTexts.viewRepository}
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
                              {displayedTexts.viewReport}
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
