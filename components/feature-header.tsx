import React from 'react'

export const FeatureHeader = ({title}:{title:string}) => {
  return (
    <div className=' font-bold w-full flex items-start mb-6 lg:mb-8'>
     <div className='  lg:pl-7 md:pl-5 pl-3 text-[2.85rem] md:text-[3rem] xl:text-[3.125rem]'>
           <h1 className=' text-pallete-beige font-bold'>
              {title}
           </h1>
     </div>
    </div>
  )
}
