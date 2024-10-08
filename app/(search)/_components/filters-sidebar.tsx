import React from 'react'
import { SizeFilterBox } from './size-filter-box'
import { cn } from '@/lib/utils'
import { GetSizes } from '@/actions/getSizes'
export const FiltersSidebar = async({className}:{
    className?:string
}) => {
    const sizes =await GetSizes()
  return (
    <div className={cn(' lg:w-[250px] relative',
        className
    )}>
        <div className=' relative '>
           <SizeFilterBox sizes = {sizes}/>
        </div>
    </div>
  )
}
