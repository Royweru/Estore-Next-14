import React from 'react'
import { services } from '@/constants'
import { ServiceBox } from './service-box'
import { SectionHeader } from './section-header'
export const Services = () => {

  return (
    <>
    <SectionHeader
     title='Services'
     subtitle='We give one of the best services and make sure our clients keep coming back'
    />
    <div className='  px-8 md:px-10 lg:px-18 bg-transparent py-6 md:py-10 '>
        <div className='relative grid grid-cols-1 md:grid-cols-4 gap-2 lg:grid-cols-3
         w-full '>
           {services.map((service)=>(
            <ServiceBox
             key={service.id}
             imageSrc={service.image}
             label={service.title}
             description={service.description}
             />
           ))}
        </div> 
    </div>
    </>
  )
}
