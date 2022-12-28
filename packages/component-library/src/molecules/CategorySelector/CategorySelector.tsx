import { Chip, Typography } from '@mui/material'

import { AutocompleteSkills } from '@nuwe/materio'
import { ConditionalText } from '../../atoms'

import { Translations } from '@nuwe/lib'

const options = [
  'FRONT-END',
  'BACK-END',
  'DATA ENGINEER',
  'FULLSTACK',
  'UX&UI',
  'MOBILE',
  'DATA SCIENTIST',
  'CYBERSECURITY'
]

interface CategorySelectorProps {
  data: any
  handlerData: any
  error: string
}

export const CategorySelector = ({ handlerData, data, error }: CategorySelectorProps) => {
  return (
    <div>
      <Typography variant='h5'>
        <Translations ns='auth' text='skills_title' />
      </Typography>
      <div style={{ margin: '1rem 0rem' }}>
        <ConditionalText show={error} color='error' />
        <Typography gutterBottom variant='subtitle1'>
          <Translations ns='auth' text='skills_specialty' />
        </Typography>
        <Typography color='text' gutterBottom>
          <Translations ns='auth' text='skills_other' />
        </Typography>
        <div>
          {options.map((key) => (
            <Chip
              style={{
                padding: '0rem 1rem',
                marginRight: '10px',
                marginTop: '10px',
                borderColor: data.role.includes(key) ? '#569B51' : '',
                color: data.role.includes(key) ? '#569B51' : ''
              }}
              clickable
              onClick={(_e) => handlerData(key, 'role')}
              label={key}
              key={key}
              variant='outlined'
            />
          ))}
        </div>
      </div>
      <div style={{ margin: '1rem 0rem' }}>
        <Typography style={{ margin: '1rem 0rem' }} variant='subtitle1'>
          <Translations ns='auth' text='skills_stack' />
        </Typography>
        <AutocompleteSkills
          controller={false}
          handlers={{
            data: data.skills,
            handlerData: (inputs: any) => handlerData(inputs, 'skills')
          }}
          cardsMode='black'
        />
      </div>
    </div>
  )
}
