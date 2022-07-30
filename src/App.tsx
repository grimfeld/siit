import React from 'react'
import './App.css'
import EmployeeCard from './components/EmployeeCard'
import useFetch from './hooks/useFetch'
import { Employee } from './types'

const App = (): JSX.Element => {

  const { pending, data, error } = useFetch<Employee[]>('http://localhost:3001/users.json', {
    method: "GET"
  })

  if (pending) return <div>Loading...</div>

  if (error) return <div>Error: {error}</div>

  if (!data) return <div>No data</div>

  return (
    <div className='max-w-[1440px] m-auto py-16'>
      <h1 className='mb-8 text-2xl font-bold uppercase'>List of employees</h1>
      <div className="grid grid-cols-6 gap-4">
        {data.map(employee => (
          <EmployeeCard key={employee.id} {...employee} />
        ))}
      </div>
    </div>
  )
}

export default App