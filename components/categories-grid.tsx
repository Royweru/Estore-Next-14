import { Category} from '@prisma/client'
import { Product } from '@/types'
import React from 'react'
import { CatgeoryGrid } from './category-grid'

export const CategoriesGrid = ({
    categories
}:{
    categories:(
        Category
    &{
        products:Product[]
    }
    )[]
}) => {
  return (
    <div className=' grid w-full relative md:grid-cols-2 gap-3 md:grid-rows-6'>
        <CatgeoryGrid category={categories[0]}  className=' row-span-6'/>
    </div>
  )
}
