import axios from 'axios'
import React from 'react'
import qs from 'query-string'
import { GetProducts } from '@/actions/getProducts'
import { GridDisplay } from './_components/grid-display'
import { ShowFilter } from './_components/show-fillter'
const BrowsePage =async ({
  searchParams
}:{
  searchParams:{
    categoryId?:string,
    sizeId?:string
  }
}) => {
   const products = await GetProducts({
    categoryId:searchParams.categoryId,
    sizeId:searchParams.sizeId
   })
   
  return (
    <div className=' p-5 flex flex-col gap-y-2 h-full w-full'>
      <ShowFilter />
         <GridDisplay
          products ={products}
       />
    </div>
  )
}

export default BrowsePage