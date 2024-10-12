import { newestToOldestProducts } from '@/actions/getNewestToOldestProducts'
import React from 'react'
import { GridDisplay } from '../_components/grid-display'

const NewToOld = async() => {
  const products = await newestToOldestProducts()

  return (
     <div className=' w-full min-h-screen bg-transparent p-5'>
       <GridDisplay
          products ={products}
       />
     </div>
  )
}

export default NewToOld