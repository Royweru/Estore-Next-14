"use client"
import React from 'react'

const filterCategories=[
    {
        label:"Cheapest Product to most expensive",
        href:'/cheapexpensive'
    },
    {
        label:"Expensive Product to cheapest",
        href:'/expensivecheap'
    },
    {
        label:"Newest to the oldest",
        href:'/newtoold'
    },
    {
        label:"Oldest to the newest",
        href:'/oldtonew'
    },
]
export const ExtraPropertiesFilter = () => {
  return (
    <div className=' w-full px-0.5 mt-4 flex flex-col gap-y-1 '>
    {filterCategories.map((filter)=>(
        <a href={`/browse/${filter.href}`} key={filter.href}>
            <div className=' w-full p-3 bg-white shadow-medium rounded hover:bg-gray-200/85 cursor-pointer justify-start 
            px-2 items-center'>
              <p className=' font-semibold text-black font-mono'>
                {filter.label}
              </p>
            </div>
        </a>
    ))}
    </div>
  )
}
