"use client"
import {useToggle} from 'react-use'
import { Category } from '@prisma/client'
import {FaCaretDown,FaCaretUp} from 'react-icons/fa'


import React from 'react'
import qs from 'query-string'

import { Button } from '@/components/ui/button'
import { useSearchParams,useRouter } from 'next/navigation'

export const CategoriesFilter =({categories}:{
    categories:Category[]
}) => {
    const [on,toggle] = useToggle(true)
    const searchParams = useSearchParams();
  const router = useRouter();
  const onClick = async (id: string) => {
    let query = {};
    
    if (searchParams) {
      query = qs.parse(searchParams.toString());
    }
    const updatedQuery = {
      ...query,
      categoryId: id,
    };
   if(searchParams.get("categoryId")===id) delete updatedQuery.categoryId

    const pushUrl = qs.stringifyUrl(
      {
        url: `/browse`,
        query: updatedQuery,
      },
      {
        skipEmptyString: true,
        skipNull: true,
      }
    );

    router.push(pushUrl);
  };
  
  return (
   <div className=' space-y-2'>
       <Button
       variant='ghost'
       className=' w-full items-center justify-between 
       px-1.5 font-semibold text-pallete-orange'
       onClick={toggle}
       >
      <p className=' text-xl text-pallete-orange'>
        Categories
      </p>
        {on && <FaCaretUp className=' size-4 font-bold text-black'/>}
        {!on && <FaCaretDown className=' size-4 font-bold text-black'/>}
       </Button>
       {on&&(
         <div className=' flex flex-col gap-y-2 w-full items-start
         justify-center  px-2'>
            {categories.map((category)=>(
                <div
                key={category.id}
                 className=' font-semibold  text-sm text-black cursor-pointer font-mono'
                 onClick={()=>onClick(category.id)}
                >
               {category.name}
                </div>
            ))}
         </div>
       )}
   </div>
  )
}
