import * as React from 'react'

import { AutocompleteBase } from './AutocompleteBase'

export interface AutocompleteControllerProps {
  field: any
  loading: boolean
  cardsMode?: 'default' | 'small' | 'black'
  technologies: any[]
}

export const AutocompleteController: React.FC<AutocompleteControllerProps> = ({
  field,
  loading,
  cardsMode,
  technologies
}) => {
  const onChangeController = React.useCallback(
    (_: any, data: any) => {
      field?.onChange(data)
      return data
    },
    [field]
  )

  return (
    <AutocompleteBase
      onChange={onChangeController}
      value={field?.value}
      loading={loading}
      cardsMode={cardsMode}
      technologies={technologies}
    />
  )
}
