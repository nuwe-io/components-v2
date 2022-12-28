/* eslint-disable camelcase */
import Link from 'next/link'

import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import { Rune } from '../../atoms'

const StyledTableCell = styled(TableCell)(({ theme }: any) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.paper,
    color: theme.palette.common.white,
    borderBottom: '0px'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    borderBottom: '0px'
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }: any) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },

  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

const StyledLink = styled(Box)(({ theme }: any) => ({
  '& a': {
    color: theme.palette.text.primary,
    textDecoration: 'none'
  }
}))

interface ChallengeRowProps {
  title: string
  url: string
  difficulty: string
  levelSystem: any
  sponsor: string
  challengeURL: string
  mod: string
}

export const ChallengeRow = (props: ChallengeRowProps) => {
  const levelSystem = props.levelSystem

  const level = props.difficulty
    ?.toString()
    .replace(/[^0-9a-z]/gi, '')
    .toLowerCase()

  const maxScore = levelSystem?.scoring[level]?.total
  const difficulty = levelSystem?.divisions[level]?.difficulty
  const division = levelSystem?.divisions[level]?.title[1]

  const colorDifficulty = {
    'Very high': '#D32F2F',
    High: '#D32F2F',
    Mid: '#FBE62F',
    Easy: '#9EC829',
    'Very easy': '#29C82F'
  }

  return (
    <StyledTableRow>
      <StyledTableCell component='th' scope='row'>
        {!props.sponsor || props.sponsor.length < 1 ? (
          <svg
            width={30}
            height={25}
            version='1.1'
            viewBox='0 0 45 45'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M22.615 35.6708V8.68264L16.9883 5.43406V33.8741L14.1028 35.5416V3.76812L8.98107 0.811087C4.98948 -1.49345 0 1.38723 0 5.99632V38.3571C0 41.646 2.54063 44.0549 5.44636 44.3276V9.04772C5.44636 7.65331 6.57675 6.52295 7.97115 6.52295H8.47611V43.8042C8.64585 43.7258 8.81436 43.6385 8.98107 43.5423L22.615 35.6708ZM25.5005 34.0048L37.0063 27.362C40.9979 25.0574 40.9979 19.296 37.0063 16.9915L34.0126 15.2631V24.0813L31.1272 25.7475V13.5971L25.5005 10.3486V34.0048Z'
              fill='#5EBF0D'
            />
          </svg>
        ) : (
          props?.sponsor &&
          Object.keys(props.sponsor).map((item) => (
            <img
              style={{ margin: '0px 2px' }}
              width={30}
              key={props.sponsor[item].name}
              src={props.sponsor[item].logo}
              alt={props.sponsor[item].name}
            />
          ))
        )}
      </StyledTableCell>
      <StyledTableCell align='right'>
        <StyledLink>
          <Link href={`/challenges/${props.challengeURL}`}>{props?.title}</Link>
        </StyledLink>
      </StyledTableCell>
      <StyledTableCell align='right'>
        <Typography style={{ color: colorDifficulty[difficulty || 'Easy'] }} variant='body2'>
          {difficulty || 'Easy'}
        </Typography>
      </StyledTableCell>
      <StyledTableCell align='right'>
        <Typography variant='body2'>{division || 'Explorer'}</Typography>
      </StyledTableCell>
      <StyledTableCell align='right'>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
          }}
        >
          <Rune mod={props?.mod === 'Data science' ? 'data' : props?.mod?.toLowerCase()} />
          <Typography variant='body2'>{maxScore || 0}</Typography>
        </div>
      </StyledTableCell>
    </StyledTableRow>
  )
}
