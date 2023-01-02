import { Box, Card, CardContent } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { useTheme } from '@mui/styles'
import { Controller } from 'react-hook-form'
import { useTechnologies } from './useTechnologies'

const logosURL = 'https://cdn.svgporn.com/logos/'

interface AutocompleteSkillsProps {
  control: any
  controller?: boolean
  handlers?: {
    data: any[]
    handlerData: (inputs: any) => void
  }
  cardsMode?: 'default' | 'small'
}

export const AutocompleteSkills = ({
  control,
  controller = true,
  handlers = {
    data: [],
    handlerData: (inputs) => console.log(inputs)
  },
  cardsMode = 'default'
}: AutocompleteSkillsProps) => {
  const theme = useTheme() as any
  const { technologies, loading } = useTechnologies(true)
  if (controller) {
    return (
      <Controller
        control={control}
        name='technologies'
        render={({ field: { onChange, value } }) => {
          return (
            <Box>
              <Autocomplete
                fullWidth
                multiple
                options={loading ? [] : technologies}
                loading={loading}
                getOptionLabel={(option) => option.name}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField {...params} label='Stack' placeholder='Stack' />
                )}
                onChange={(_, data) => {
                  onChange(data)
                  return data
                }}
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
                {value?.map((skill: any, i: number) => (
                  <Card
                    key={i}
                    style={{
                      border: `2px solid ${theme.palette.background.paper}`
                    }}
                  >
                    <CardContent
                      style={{
                        display: 'grid',
                        placeItems: 'center',
                        padding: '1rem',
                        borderRadius: '5px',
                        height: '100%',
                        border: `2px solid ${theme.palette.background.default}`
                      }}
                    >
                      <img
                        style={{ width: '30px' }}
                        alt={skill.name}
                        src={logosURL + skill?.files}
                      />
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>
          )
        }}
      />
    )
  } else {
    return (
      <Box>
        <Autocomplete
          fullWidth
          multiple
          options={loading ? [] : technologies}
          loading={loading}
          getOptionLabel={(option) => option.name}
          filterSelectedOptions
          onChange={(_e, v) => handlers.handlerData(v)}
          renderInput={(params) => (
            <TextField {...params} label='Stack' placeholder='Stack' required />
          )}
          value={handlers.data}
        />
        <Box
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit, minmax(100px, 1fr))`,
            gap: '2rem',
            margin: '1rem 0rem'
          }}
        >
          {handlers.data.length > 0 &&
            handlers.data.map((skill, i) => (
              <Card
                key={i}
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
                  <img style={{ width: '30px' }} alt={skill.name} src={logosURL + skill.files} />
                </CardContent>
              </Card>
            ))}
        </Box>
      </Box>
    )
  }
}
