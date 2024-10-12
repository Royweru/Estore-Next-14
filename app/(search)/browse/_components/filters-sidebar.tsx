import React from 'react'
import { SizeFilterBox } from './size-filter-box'
import { cn } from '@/lib/utils'
import { GetSizes } from '@/actions/getSizes'
import { CategoriesFilter } from './categories-filter'
import { GetCategories } from '@/actions/getCategories'
import { ExtraPropertiesFilter } from './extra-properties-filter'
export const FiltersSidebar = async({className}:{
    className?:string
}) => {
    const sizes =await GetSizes()
    const categories = await GetCategories()
  return (
    <div className={cn(' relative',
        className
    )}>
        <div className=' relative w-full h-full space-y-4'>
           <CategoriesFilter  categories={categories}/>
           <SizeFilterBox sizes = {sizes}/>
           <ExtraPropertiesFilter />
        </div>
    </div>
  )
}
