import React from 'react'


export const CtaButton = ({label}:{
    label:string
}) => {
  return (
    <button className="px-20 py-4 rounded-md bg-pallete-orange text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-pallete-orange">
    {label}
  </button>
  )
}
