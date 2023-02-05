import React, { FC } from 'react'
import { Service } from '../../../types'

interface ServiceCrdProps {
  service: Service
}

export const ServiceCrd: FC<ServiceCrdProps> = ({
  service: { Icon, about, title },
}) => {
  // const createMarkup = () => {
  //   return { __html: about }
  // }

  return (
    <div className='flex items-center space-x-4 p-2'>
      <Icon className='w-12 h-12 text-green' />
      <div>
        <h4 className='font-bold'>{title}</h4>
        {/*<p dangerouslySetInnerHTML={createMarkup()} />*/}
        <p>{about}</p>
      </div>
    </div>
  )
}
