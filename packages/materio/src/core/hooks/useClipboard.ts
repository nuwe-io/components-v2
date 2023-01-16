// ** React Imports
import { useCallback, useRef } from 'react'

// ** Third Party Imports
import copy from 'clipboard-copy'

const isInputLike = (node: any) => {
  return node && (node.nodeName === 'TEXTAREA' || node.nodeName === 'INPUT')
}

export const useClipboard = (options: any = {}) => {
  const targetRef = useRef(null) as any

  const handleSuccess = () => {
    if (options.onSuccess) {
      options.onSuccess()
    }
    if (options.selectOnCopy && isInputLike(targetRef.current)) {
      targetRef.current.select()
    }
  }

  const handleError = () => {
    if (options.onError) {
      options.onError()
    }
    const selectOnError = options.selectOnError !== false
    if (selectOnError && isInputLike(targetRef.current)) {
      targetRef.current.select()
    }
  }

  const clipboardCopy = (text: string) => {
    copy(text).then(handleSuccess).catch(handleError)
  }

  const copyHandler = useCallback((text: string) => {
    if (typeof text === 'string') {
      clipboardCopy(text)
    } else if (targetRef.current) {
      clipboardCopy(targetRef.current.value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    copy: copyHandler,
    target: targetRef
  }
}
