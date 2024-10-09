import { Product } from '@/types'
import { Category } from '@prisma/client'
import React from 'react'

export const CatgeoryGrid = ({
    className,
    category
}:{
   className:string,
   category:(
    Category&{
        products:Product[]
    }
   )
}) => {
  return (
    <div
    className={`relative h-full bg-cover bg-center  col-span-1 cursor-pointer
        rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ${className}`}
    style={{ backgroundImage: `url(${category.products[0].images[0].url})` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <h2 className="text-white text-2xl font-bold">{category.name}</h2>
    </div>
  </div>
  )
}
