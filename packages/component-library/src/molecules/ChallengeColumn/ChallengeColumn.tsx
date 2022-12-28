import { Link } from '@mui/material'

import { useRouter } from 'next/router'

interface ChallengeColumnProps {
  title: string
  url: string
}

export const ChallengeColumn = ({ title, url }: ChallengeColumnProps) => {
  const router = useRouter()

  return (
    <Link
      href={`https://nuwe.io/challenge/${url}`}
      underline='none'
      color='secondary'
      onClick={(e) => {
        e.preventDefault()
        router.push(`https://nuwe.io/challenge/${url}`)
      }}
    >
      {title}
    </Link>
  )
}
