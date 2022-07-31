import React from 'react'
import useFetch from '../hooks/useFetch'
import { Employee, Service } from '../types'

interface ServiceCardProps extends Service {
  className?: string
  handleClick?: () => void
}

const ServiceCard = ({ id, name, website_url, logo_url, price, className, handleClick }: ServiceCardProps): JSX.Element => {

  const { pending, data, error } = useFetch<Employee[]>('/users.json?service_id=' + id, {
    method: "GET"
  })

  if (pending) return <div>Loading...</div>

  if (error) return <div>Error: {error}</div>

  if (!data) return <div>No data</div>

  return (
    <div className={['p-4 bg-white shadow-lg flex flex-col items-center rounded-lg', className].join(' ')} onClick={handleClick}>
      <img src={logo_url} alt={name} className="w-full mb-4 rounded-lg aspect-square" />
      <span className='mb-2 text-sm'>Monthly Cost: {price.flat_cost + (price.cost_per_user * ((data.length > 0) ? (data.length - price.nb_users_included) : 0))}$</span>
      <h3 className='font-bold text-gray-900'>{name}</h3>
      <a href={website_url} target="__blank" className='text-gray-500 underline'> Visit service</a>
    </div>
  )
}

export default ServiceCard