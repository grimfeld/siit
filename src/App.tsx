import React from 'react'
import './App.css'
import EmployeesList from './components/EmployeesList'
import ServicesList from './components/ServicesList'

const App = (): JSX.Element => {

  return (
    <div className='max-w-[1440px] m-auto py-16'>
      <EmployeesList className='mb-16' />
      <ServicesList />
    </div>
  )
}

export default App