import React from 'react'

export const ShowFilter = ({
    categoryId,
    sizeId
}:{
    categoryId?:string,
    sizeId?:string
}) => {

    if(!categoryId||!sizeId){return null}
  return (
    <div>ShowFilter</div>
  )
}
