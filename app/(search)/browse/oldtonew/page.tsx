
import { oldestToNewestProducts } from '@/actions/getOldestToNewestProducts'
import React from 'react'
import { GridDisplay } from '../_components/grid-display'

const OldToNew = async() => {
  const products = await oldestToNewestProducts()

  return (
     <div className=' w-full min-h-screen bg-transparent p-5'>
       <GridDisplay
          products ={products}
       />
     </div>
  )
}


export default OldToNew