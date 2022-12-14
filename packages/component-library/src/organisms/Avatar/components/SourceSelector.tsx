import { useAvatar } from '../useAvatar'

import { AvatarSelector } from '.'
import { Dropdown } from '../../../molecules'

interface SourceSelectorProps {
  displayedTexts: {
    imageGeneratorSelector: string
  }
}

export const SourceSelector = ({ displayedTexts }: SourceSelectorProps) => {
  const { state, setFileName } = useAvatar() as any

  if (state.sourceType === state.sourceTypes[1])
    return (
      <Dropdown
        title={displayedTexts.imageGeneratorSelector}
        array={state.generators}
        value={state.generators.indexOf(state.fileName)}
        onChange={(e: any) => setFileName(state.generators[e.target.value])}
      />
    )

  return <AvatarSelector />
}
