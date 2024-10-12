"use client"
import { useCart } from '@/hooks/use-cart'
import Image from 'next/image'
import React from 'react'

const CartPage = () => {
  const { items } = useCart()

  return (
    <div className='min-h-screen w-full p-8 md:p-18 lg:p-20 '>
      <h1 className='text-3xl font-bold mb-8 text-gray-800'>Your Cart</h1>
      
      {items.length > 0 ? (
        <div className=' flex flex-col gap-y-2 '>
          {items.map((item, index) => (
            <div 
              key={index} 
              className='bg-white  shadow-medium rounded-lg p-1.5
              shadow hover:shadow-xl flex items-center transition-shadow duration-300'
            >
              <div className=' lg:w-[150px] w-[120px] lg:h-[150px] h-[100px]'>
                 <Image
                   src={item.images[0].url}
                   alt=''
                   className=' items-center bg-cover'
                  fill
                   />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className='text-gray-600 text-center text-xl'>Your cart is empty</p>
      )}
    </div>
  )
}

export default CartPage
