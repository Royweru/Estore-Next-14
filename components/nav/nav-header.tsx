import { HomeIcon, PhoneIcon } from 'lucide-react'
import React from 'react'

export const NavHeader = () => {
  return (
    <div className=' w-full bg-pallete-red '>
        <div className=' bg-transparent w-full  px-4  py-2  md:px-6  hidden items-center justify-between relative lg:flex'>
          <div className=' gap-x-2 flex items-center '>
             <div className='flex items-center gap-0.5'>
              <PhoneIcon className=' size-5 text-white' />
              <p className=' font-normal text-sm text-text-primary'>
                +254 6788 30000
              </p>
             </div>
             <div className='flex items-center gap-0.5'>
              <HomeIcon className=' size-5 text-white'/>
              <p className=' font-normal text-sm text-text-primary'>
                 Nairobi,Westlands Ojijo Road
              </p>
             </div>
          </div>
          <div className=' h-[10px] w-0.5 bg-neutral-white xl:block hidden'/>
          <div className='  flex justify-center'>
            <p className=' text-sm font-normal text-text-primary'>
            Opening Hrs : Monday - Friday 8:00 A.M to 6 P.M, Saturday-Sunday  9:00 A.M to 4:00 P.M
            </p>
          </div>
          <div className=' h-[10px] w-0.5 bg-neutral-white xl:block hidden'/>
          <div className=' relative'>
             <p className=' text-xl font-bold text-white'>
                 Welcome !!
             </p>
          </div>
        </div>
   </div>
  )
}
