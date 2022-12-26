import { Button } from '@mui/material'
import { useRouter } from 'next/router'

interface ReportColumnProps {
  url: string
}

export const ReportColumn = ({ url = '' }: ReportColumnProps) => {
  const router = useRouter()

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <Button onClick={() => router.push(url)} size='small' variant='outlined'>
        {'>'}
      </Button>
    </div>
  )
}
