"use client"

import { Size } from "@prisma/client"

export const SizeFilterBox = (
    {
        sizes
    }:{
        sizes:Size[]
    }
) => {
  return (
    <div className=' p-5 m-2 flex flex-wrap w-[180px] h-[180px] border-black bg-transparent border-4 gap-2'>
       { sizes.map((size)=>(
          <div 
           key={size.id}
          className=" p-4 flex items-center justify-center text-lg font-bold  font-mono bg-neutral-black">
               <p>
                {size.value}
               </p>
          </div>
       ))}
        </div>
  )
}
