import { createContext, useContext } from 'react'

import { createContextualCan as createContextualCanReact } from '@casl/react'

export const AbilityContext = createContext(undefined)

export const useACLContext = () => useContext(AbilityContext)

export const createContextualCan = createContextualCanReact(AbilityContext.Consumer)
