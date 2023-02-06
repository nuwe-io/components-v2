import React from 'react'

import { SettingsContext } from '../context/settingsContext'

export const useSettings = () => React.useContext(SettingsContext)
