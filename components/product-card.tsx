"use client"
import { Image as ImageType, Product } from '@prisma/client'
import Image from 'next/image'
import React from 'react'

export const ProductCard = ({
    data
}:{
    data:Product &{
      images:ImageType[]
    }
}) => {
  return (
    <div 
    className=' col-span-1 md:col-span-3
     cursor-pointer  bg-transparent'
     onClick={()=>{}}
     >
        <div className=' flex flex-col overflow-hidden gap-y-1 relative w-full '>
            <div className=' w-full lg:h-[280px] md:h-[220px] h-[200px] relative group'>
             <Image
              fill
              src={data.images[0].url}
              className=' bg-cover bg-center group-hover:hidden'
              alt={data.name}
              />
             <Image
              fill
              src={data?.images[1].url}
              className='bg-cover bg-center group-hover:block hidden'
              alt={data.name}
              />
            </div>
            <div className='  flex flex-col space-y-2  pl-3'>
              <p className=' text-start font-light text-xs italic'>
                T-shirt
              </p>
              <div className=' flex flex-col gap-y-0.5'>
                <h4 className=' text-normal font-normal tracking-wide truncate'>
                  {data.name} ,{data.description}
                </h4>
                 <h3 className=' text-xl font-bold text-black'>
                  <span className=' text-sm text-neutral-black font-normal mr-3'>
                  $
                  </span>
                {data.price.toLocaleString()}
                 </h3>
              </div>
            </div>
        </div>
    </div>
  )
}
