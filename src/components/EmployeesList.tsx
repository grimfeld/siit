import React from "react"
import useFetch from '../hooks/useFetch'
import { Employee, Filter } from '../types'
import EmployeeCard from './EmployeeCard'
import Badge from './Badge'
import Title from './Title'
import eventBus from '../utils/EventBus'

const EmployeesList = ({ className, filter }: { className?: string, filter?: Filter }): JSX.Element => {

  const { pending, data, error } = useFetch<Employee[]>(!filter ? '/users.json' : `/users.json?service_id=${filter.id}`, {
    method: "GET"
  })


  if (pending) return <div>Loading...</div>

  if (error) return <div>Error: {error}</div>

  if (!data) return <div>No data</div>

  return (
    <div className={['pb-16 border-b', className].join(' ')}>
      <div className="flex items-center mb-8 gap-x-8">
        <Title>List of employees</Title>
        {filter && <Badge className='bg-violet-300' content={filter.name} handleClose={() => eventBus.dispatch("clearFilter")} />}
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 2xl:grid-cols-8">
        {data.map(employee => (
          <EmployeeCard key={employee.id} {...employee} />
        ))}
      </div>
    </div>
  )
}

export default EmployeesList