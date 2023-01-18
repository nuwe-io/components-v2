import { ButtonLoader } from '../../atoms'
import { withMaterialDialog } from './withMaterialDialog'

//

interface BaseDialogActionsProps {
  cancelText: string
  disabledText: string
  accepText: string
  disabled: boolean
  loading: boolean
  cancelAction: () => void
  acceptAction: () => void
}

export const BaseDialogActions = ({
  cancelText,
  disabledText,
  accepText,
  disabled,
  loading,
  cancelAction,
  acceptAction
}: BaseDialogActionsProps) => {
  return (
    <>
      <ButtonLoader disabled={loading} onClick={cancelAction}>
        {cancelText}
      </ButtonLoader>
      <ButtonLoader disabled={disabled} loading={loading} onClick={acceptAction}>
        {disabled ? disabledText : accepText}
      </ButtonLoader>
    </>
  )
}

export default withMaterialDialog(BaseDialogActions)
