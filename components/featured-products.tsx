import { Category, Image as ImageType } from '@prisma/client'
import React from 'react'
import { ProductCard } from './product-card'
import { SectionHeader } from './section-header'
import { Product } from '@/types'

export const FeaturedProducts = ({
  products
}:{
  products:(Product &{
    images:ImageType[] 
    category:Category
  })[]
}) => {
  return (
    <>
       <SectionHeader title='Our Featured products'/>
        <div className=' w-full grid px-4 sm:px-6 md:px-8 lg:px-10 
    grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-2 lg:gap-1.5'>
        {products.map((product)=>(
          <ProductCard
          key={product.id}
            data={product}
           rating={5}
            />
        ))}
    </div>
    </>
 
  )
}
