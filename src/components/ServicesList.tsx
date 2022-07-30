import React from 'react'
import useFetch from '../hooks/useFetch'
import { Service } from '../types'
import eventBus from '../utils/EventBus'
import ServiceCard from './ServiceCard'
import Title from './Title'

const ServicesList = ({ className }: { className?: string }): JSX.Element => {

  const { pending, data, error } = useFetch<Service[]>('http://localhost:3001/services.json', {
    method: "GET"
  })

  if (pending) return <div>Loading...</div>

  if (error) return <div>Error: {error}</div>

  if (!data) return <div>No data</div>

  return (
    <div className={['pb-16 border-b', className].join(' ')}>
      <Title className='mb-8'>List of services</Title>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 2xl:grid-cols-8">
        {data.map(service => (
          <ServiceCard key={service.id} {...service} handleClick={() => eventBus.dispatch('setFilter', { id: service.id, name: service.name })} />
        ))}
      </div>
    </div>
  )
}

export default ServicesList