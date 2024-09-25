import { Product } from '@/types'
import React from 'react'
import { ProductCard } from './product-card'
import { SectionHeader } from './section-header'

export const Showcase = ({data,header,sub}:{
    data:Product[]
    header:string,
    sub?:string
}) => {
  return (
    <>
     <SectionHeader title={header} subtitle={sub}/>
      <div  className=' w-full relative py-8 md:py-10 bg-transparent'>
    <div className='  px-4 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2
     md:grid-cols-9 lg:grid-cols-12 gap-3 md:gap-2 lg:gap-1.5'>
         {data?.slice(0,4).map((product)=>(
            <ProductCard 
             key={product.id}
             data = {product}
            />
         ))}
    </div>
    </div>
    </>
  
  )
}
