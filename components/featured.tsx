import React from 'react'

import { FeatureGrid } from './feature-grid'
import { SectionHeader } from './section-header'
import { GetCategories } from '@/actions/getCategries'
import { GetProducts } from '@/actions/getProducts'


export const Featured =async () => {

  const categories = await GetCategories()
  const products = await GetProducts()

 console.log(categories)
  return (
    <>
       <SectionHeader title='Featured products' />
      <div className=" md:py-8 lg:py-12 py-6 px-8 md:px-10 lg:px-12
     relative w-full">
      <FeatureGrid  />
    </div>
    </>
   
    
  )
}
