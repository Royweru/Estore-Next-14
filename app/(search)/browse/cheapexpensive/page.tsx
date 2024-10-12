import { cheapestToExpensiveProducts } from '@/actions/getCheapestToExpensiveProducts'
import React from 'react'
import { GridDisplay } from '../_components/grid-display'

const CheapToExpensive =async() => {
    const products = await cheapestToExpensiveProducts()
    console.log(products)
  return (
     <div className=' w-full min-h-screen bg-transparent p-5'>
       <GridDisplay
          products ={products}
       />
     </div>
  )
}

export default CheapToExpensive