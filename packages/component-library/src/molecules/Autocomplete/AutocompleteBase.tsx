import * as React from 'react'

import { Box, Card, CardContent } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { useTheme } from '@mui/styles'

export interface AutocompleteBaseProps {
  controller?: boolean
  value?: any
  onChange: any
  loading: boolean
  cardsMode?: 'default' | 'small' | 'black'
  technologies: any[]
}

const LOGOS_URL = 'https://cdn.svgporn.com/logos/'

export const AutocompleteBase = ({
  onChange,
  loading,
  cardsMode,
  technologies,
  value
}: AutocompleteBaseProps) => {
  const getOptionLabel = React.useCallback((option: any) => {
    return option.name
  }, [])

  const theme = useTheme() as any

  return (
    <Box>
      <Autocomplete
        fullWidth
        multiple
        options={loading ? [] : technologies}
        loading={loading}
        getOptionLabel={getOptionLabel}
        filterSelectedOptions
        onChange={onChange}
        renderInput={renderInput}
        value={value}
      />
      <Box
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(100px, 1fr))`,
          gap: '2rem',
          margin: '1rem 0rem'
        }}
      >
        {value.length > 0 &&
          value.map((skill: any) => (
            <Card
              key={skill?.name}
              style={{
                border: `2px solid ${
                  cardsMode === 'default'
                    ? theme.palette.background.paper
                    : theme.palette.background.default
                }`
              }}
            >
              <CardContent
                style={{
                  display: 'grid',
                  placeItems: 'center',
                  padding: '1rem',
                  borderRadius: '5px',
                  height: '100%',
                  background:
                    cardsMode === 'default'
                      ? theme.palette.background.paper
                      : theme.palette.background.default,
                  border: `2px solid ${
                    cardsMode === 'default'
                      ? theme.palette.background.default
                      : theme.palette.background.paper
                  }`
                }}
              >
                <img style={{ width: '30px' }} alt={skill.name} src={LOGOS_URL + skill.files} />
              </CardContent>
            </Card>
          ))}
      </Box>
    </Box>
  )
}

const renderInput = (params: any) => (
  <TextField {...params} label='Stack' placeholder='Stack' required />
)
