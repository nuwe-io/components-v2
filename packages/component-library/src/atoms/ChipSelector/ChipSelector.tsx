import { ChipOption } from '../ChipOption'

interface ChipSelectorProps {
  options: string[]
  condition: (key: string) => boolean
  updateSelected: (key: string) => void
  defaultAvatar?: any
  selectedAvatar?: any
}

export const ChipSelector = ({
  options,
  condition,
  updateSelected,
  ...props
}: ChipSelectorProps) => {
  return (
    <>
      {' '}
      {options.map((key) => {
        return (
          <ChipOption
            key={key}
            value={key}
            condition={condition(key)}
            updateSelected={(e: any) => updateSelected(e.target.value ?? key)}
            {...props}
          />
        )
      })}
    </>
  )
}
