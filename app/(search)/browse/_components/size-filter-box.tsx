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
    <div className=' p-1 m-1 flex flex-wrap w-[220px] max-h-min border-black bg-transparent border-4 gap-2'>
       { sizes.map((size)=>(
          <div 
           key={size.id}
          className=" p-4 flex items-center justify-center 
          text-lg font-bold  font-mono bg-neutral-black  cursor-pointer
           hover:opacity-85">
               <p className=" text-white">
                {size.value}
               </p>
          </div>
       ))}
        </div>
  )
}
