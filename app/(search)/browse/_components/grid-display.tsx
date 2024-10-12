import { ProductCard } from '@/components/product-card'
import { Product } from '@/types'
import { Category, Image as ImageType, Size } from '@prisma/client'
import React from 'react'

export const GridDisplay = ({
    products
}:{
    products:(Product&{
        category:Category,
        size:Size,
        images:ImageType[]
    })[]
}) => {
  return (
    <div className=' w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {products.map((product)=>(
            <ProductCard
             key={product.id}
             data={product}
             rating={4}
             />
        ))}
    </div>
  )
}
