import React from 'react'

const ProductCard = ({name,location,thumb_title}) => {
  return (
    <div className='ProductItem'>
        <div className='ProductThumb'>{thumb_title}</div>
        <div className='ProductInfo'>
            <div className='ProductTitle'>{name}</div>
            <div className='ProductLocation'>{location}</div>
            {/* <div className='ProductId'>{cat_id}</div> */}
        </div>
    </div>
  )
}

export default ProductCard