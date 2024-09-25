"use client"
import React from 'react'

export const ServiceBox = ({imageSrc,label,description}:{
    imageSrc:string,label:string,description:string
}) => {
  return (
    <div className=' col-span-1 md:col-span-2 lg:col-span-1 
    flex items-center justify-start gap-3 overflow-hidden '>
    <div className=''>
     <img src={imageSrc} className=' bg-contain' width={75} height={75} />
    </div>
    <div  className=' flex flex-col gap-0.5  justify-center' >
      <h2 className=' text-xl font-semibold  text-neutral-black/75'>
       {label}
      </h2>
      <p className=' text-sm font-normal tracking-wide text-text-primary'>
        {description}
      </p>
    </div>
    </div>
  )
}
