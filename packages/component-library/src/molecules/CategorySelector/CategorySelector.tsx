import { Chip, Typography } from '@mui/material'

import { AutocompleteSkills } from '@nuwe/materio'
import { ConditionalText } from '../../atoms'

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
  handleData: any
  error: string
  displayedTexts: {
    skillsTitle: string
    skillsSpecialty: string
    skillsOther: string
    skillsStack: string
  }
}

export const CategorySelector = ({
  handleData,
  data,
  error,
  displayedTexts
}: CategorySelectorProps) => {
  return (
    <div>
      <Typography variant='h5'>{displayedTexts.skillsTitle}</Typography>
      <div style={{ margin: '1rem 0rem' }}>
        <ConditionalText show={error} color='error' />
        <Typography gutterBottom variant='subtitle1'>
          {displayedTexts.skillsSpecialty}
        </Typography>
        <Typography color='text' gutterBottom>
          {displayedTexts.skillsOther}
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
              onClick={(_e) => handleData(key, 'role')}
              label={key}
              key={key}
              variant='outlined'
            />
          ))}
        </div>
      </div>
      <div style={{ margin: '1rem 0rem' }}>
        <Typography style={{ margin: '1rem 0rem' }} variant='subtitle1'>
          {displayedTexts.skillsStack}
        </Typography>
        <AutocompleteSkills
          controller={false}
          handlers={{
            data: data.skills,
            handleData: (inputs: any) => handleData(inputs, 'skills')
          }}
          cardsMode='black'
        />
      </div>
    </div>
  )
}
