import React from 'react'
import { FiltersSidebar } from './browse/_components/filters-sidebar'

const SearchLayout = ({children}:{
    children:React.ReactNode
}) => {
  return (
    <div className=' md:grid w-full md:grid-cols-10 lg:grid-cols-12 
    md:px-10 lg:px-16 py-2  pb-5 md:gap-3 lg:gap-1'>
      <FiltersSidebar
       className='md:block hidden md:col-span-2 lg:col-span-4'/>
      <div className=' w-full md:col-span-6 lg:col-span-8'>
      {children}
      </div>
    </div>
  )
}

export default SearchLayout