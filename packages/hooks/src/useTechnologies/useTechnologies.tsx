import React from 'react'

import useSWR from 'swr'

import { technologiesRepository } from './useTechnologies.repository'
import { technologiesServices } from './useTechnologies.services'

const TechnologiesContext = React.createContext({})

export const TechnologiesProvider = ({
  BACKEND_URL,
  children
}: {
  BACKEND_URL: string
  children: React.ReactNode
}) => {
  const { getAllTechnologies } = technologiesServices(technologiesRepository(BACKEND_URL))

  return (
    <TechnologiesContext.Provider value={getAllTechnologies}>
      {children}
    </TechnologiesContext.Provider>
  )
}

export const useTechnologies = (open: boolean) => {
  const context = React.useContext(TechnologiesContext)

  if (context === undefined) {
    throw new Error('useTechnologies must be used within a TechnologiesProvider')
  }

  const { data, error } = useSWR(open ? 'technologies' : null, context)

  return {
    technologies: data && data.data.data,
    loading: !data && !error,
    error: data?.error
  }
}
