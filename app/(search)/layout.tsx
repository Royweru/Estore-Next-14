import React from 'react'
import { FiltersSidebar } from './browse/_components/filters-sidebar'

const SearchLayout = ({children}:{
    children:React.ReactNode
}) => {
  return (
    <>
      <FiltersSidebar className=' h-full lg:flex hidden bg-transparent lg:fixed top-18 left-0'/>
      <div className=' min-h-screen relative lg:pl-[250px] pl-0'>
      {children}
      </div>
 
    </>
    

  )
}

export default SearchLayout