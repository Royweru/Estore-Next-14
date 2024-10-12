import React from 'react'

const BrowsePage = ({
  searchParams
}:{
  searchParams:{
    categoryId?:string,
    sizeId?:string
  }
}) => {
  return (
    <div>
      BrowsePage:
      {searchParams.sizeId},
      {searchParams.categoryId}
    </div>
  )
}

export default BrowsePage