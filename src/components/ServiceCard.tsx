import React from 'react'
import { Service } from '../types'

interface ServiceCardProps extends Service {
  className?: string
}

const ServiceCard = ({ name, website_url, logo_url, className }: ServiceCardProps): JSX.Element => {
  return (
    <div className={['p-4 bg-white shadow-lg flex flex-col items-center rounded-lg', className].join(' ')}>
      <img src={logo_url} alt={name} className="w-full mb-4 rounded-lg aspect-square" />
      <h3 className='font-bold text-gray-900'>{name}</h3>
      <a href={website_url} target="__blank" className='text-gray-500 underline'> Visit service</a>
    </div>
  )
}

export default ServiceCard