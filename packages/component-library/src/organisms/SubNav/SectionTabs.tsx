import { Tab, Tabs } from '@mui/material'
import { useState } from 'react'

interface SectionTabsProps {
  tab$: any
  handleChangeTab: (event: React.SyntheticEvent, newValue: number) => void
}

const SectionTabs = ({ tab$, handleChangeTab }: SectionTabsProps) => {
  const [tab, setTab] = useState(0)

  tab$.subscribe((currentTab: any) => {
    if (currentTab === 0 && tab !== currentTab) {
      setTab(currentTab)
    }
    if (currentTab === 1 && tab !== currentTab) {
      setTab(currentTab)
    }
  })

  return (
    <Tabs
      value={tab}
      onChange={handleChangeTab}
      indicatorColor='primary'
      textColor='primary'
      centered
    >
      <Tab label='Active' />
      <Tab label='Closed' />
    </Tabs>
  )
}

export default SectionTabs
