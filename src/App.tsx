import React, { useEffect, useState } from 'react'
import './App.css'
import EmployeesList from './components/EmployeesList'
import ServicesList from './components/ServicesList'
import { Filter } from './types'
import eventBus from './utils/EventBus'

const App = (): JSX.Element => {

  const [filter, setFilter] = useState<Filter | undefined>(undefined)

  useEffect(() => {
    eventBus.on('setFilter', (filter: Filter) => {
      setFilter(filter)
    })

    eventBus.on('clearFilter', () => {
      setFilter(undefined)
    })

    return () => {
      eventBus.remove('setFilter', (filter: Filter) => {
        setFilter(filter)
      })
      eventBus.remove('clearFilter', () => {
        setFilter(undefined)
      })
    }

  }, [])

  return (
    <div className='max-w-[1440px] m-auto py-16'>
      <h1 className='mb-16 text-4xl font-black uppercase'>Siit</h1>
      <EmployeesList className='mb-16' filter={filter} />
      <ServicesList />
    </div>
  )
}

export default App