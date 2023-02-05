import React, { FC } from 'react'
import { Service } from '../../../types'

interface ServiceCrdProps {
  service: Service
}

export const ServiceCrd: FC<ServiceCrdProps> = ({
  service: { Icon, about, title },
}) => {
  return (
    <div className='flex items-center space-x-4 p-2'>
      <Icon className='w-12 h-12 text-green' />
      <div>
        <h5 className='font-bold'>{title}</h5>
        <p>{about}</p>
      </div>
    </div>
  )
}
