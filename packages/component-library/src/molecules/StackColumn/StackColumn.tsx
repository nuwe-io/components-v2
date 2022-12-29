/* eslint-disable comma-spacing */
import { Box, Chip } from '@mui/material'

interface StackColumnProps {
  stack: string[]
}

export const StackColumn = ({ stack = [] }: StackColumnProps) => {
  return (
    <Box style={{ display: 'flex', width: '100%' }}>
      {stack.length > 0
        ? (stack.length > 5 ? stack.slice(0, 5) : stack).map((skill, i) => (
            <Chip
              key={i}
              label={skill}
              variant='outlined'
              color='primary'
              size='small'
              style={{ marginLeft: 5, marginRight: 5 }}
            />
          ))
        : null}
    </Box>
  )
}
