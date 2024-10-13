"use client"
import React, { useEffect, useState } from 'react'

import { MainNav } from './main-nav'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export const Navbar = () => {
const [mounted, setMounted] = useState(false)
const pathName  =usePathname()

 const isHidden =  pathName ==='/admin' || pathName ==='/sign-in' ||pathName === '/sign-up'
useEffect(()=>{
  setMounted(true)
},[])

if(!mounted) return null
  return (
    <div className={cn(' w-full relative',
      isHidden && 'hidden'
    )}>
       
       <MainNav /> 
    </div>
  )
}
