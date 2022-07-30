import React from "react"
import useFetch from '../hooks/useFetch'
import { Employee } from '../types'
import EmployeeCard from './EmployeeCard'
import Title from './Title'

const EmployeesList = ({ className }: { className?: string }): JSX.Element => {

  const { pending, data, error } = useFetch<Employee[]>('http://localhost:3001/users.json', {
    method: "GET"
  })

  if (pending) return <div>Loading...</div>

  if (error) return <div>Error: {error}</div>

  if (!data) return <div>No data</div>
  return (
    <div className={['pb-16 border-b', className].join(' ')}>
      <Title className='mb-8'>List of employees</Title>
      <div className="grid grid-cols-4 gap-4">
        {data.map(employee => (
          <EmployeeCard key={employee.id} {...employee} />
        ))}
      </div>
    </div>
  )
}

export default EmployeesList