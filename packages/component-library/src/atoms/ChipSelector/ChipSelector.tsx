import { ChipOption } from 'src/shared/components/atoms/ChipOption'

interface ChipSelectorProps {
  options: string[]
  condition: (key: string) => boolean
  updateSelected: (key: string) => void
}

export const ChipSelector = ({ options, condition, updateSelected, ...props }: ChipSelectorProps) =>
  options.map((key) => {
    return (
      <ChipOption
        key={key}
        value={key}
        condition={condition(key)}
        updateSelected={(e: any) => updateSelected(e.target.value ?? key)}
        {...props}
      />
    )
  })
