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

  const { data, error } = useSWR(open ? 'technologies' : null, getAllTechnologies)

  const value = {
    technologies: data && data.data.data,
    loading: !data && !error,
    error: data?.error
  }

  return <TechnologiesContext.Provider value={value}>{children}</TechnologiesContext.Provider>
}

export const useTechnologies = () => {
  const context = React.useContext(TechnologiesContext)

  if (context === undefined) {
    throw new Error('useTechnologies must be used within a TechnologiesProvider')
  }

  return context
}
