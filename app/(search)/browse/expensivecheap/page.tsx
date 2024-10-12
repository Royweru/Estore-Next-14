import { expensiveToCheapestProducts } from '@/actions/getExpensiveToCheapestProductst'
import React from 'react'
import { GridDisplay } from '../_components/grid-display'

const ExpensiveToCheap=async () => {
  const products = await expensiveToCheapestProducts()

return (
   <div className=' w-full min-h-screen bg-transparent p-5'>
     <GridDisplay
        products ={products}
     />
   </div>
)
}

export default ExpensiveToCheap
