import React from 'react'

import { FeatureGrid } from './feature-grid'
import { SectionHeader } from './section-header'


export const Featured = () => {
  return (
    <>
       <SectionHeader title='Featured products' />
      <div className=" md:py-8 lg:py-12 py-6 px-8 md:px-10 lg:px-12
     relative w-full">
      <FeatureGrid />
    </div>
    </>
   
    
  )
}
