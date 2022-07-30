import React from 'react'
import { Employee } from '../types'

interface EmployeeCardProps extends Employee {
  className?: string
}

const EmployeeCard = ({ avatar_url, name, position, className }: EmployeeCardProps): JSX.Element => {
  return (
    <div className={['p-4 bg-white shadow-lg flex flex-col items-center rounded-lg', className].join(' ')}>
      <img src={avatar_url} alt={name} className="w-full mb-4 rounded-lg aspect-square" />
      <h3 className='font-bold text-gray-900'>{name}</h3>
      <p className='text-gray-500'>{position}</p>
    </div>
  )
}

export default EmployeeCard