import * as React from 'react'

import { Controller } from 'react-hook-form'

import { useTechnologies } from '@nuwe/hooks'

import { AutocompleteBase } from './AutocompleteBase'
import { AutocompleteController } from './AutocompleteController'

interface AutocompleteSkillsProps {
  control?: any
  controller?: boolean
  handlers?: {
    data: any[]
    handleData: (inputs: any) => void
  }
  cardsMode?: 'default' | 'small' | 'black'
}

export const AutocompleteSkills = ({
  control,
  controller = true,
  handlers = {
    data: [],
    handleData: (inputs) => console.log(inputs)
  },
  cardsMode = 'default'
}: AutocompleteSkillsProps) => {
  const { technologies, loading } = useTechnologies(true)

  const onChange = React.useCallback((_e: any, v: any) => handlers.handleData(v), [handlers])

  const controllerRender = React.useCallback(
    ({ field }: { field: any }) => (
      <AutocompleteController
        field={field}
        loading={loading}
        cardsMode={cardsMode}
        technologies={technologies}
      />
    ),
    [loading, cardsMode, technologies]
  )

  if (controller)
    return <Controller control={control} name='technologies' render={controllerRender} />

  return (
    <AutocompleteBase
      onChange={onChange}
      loading={loading}
      cardsMode={cardsMode}
      technologies={technologies}
      value={handlers.data}
    />
  )
}
