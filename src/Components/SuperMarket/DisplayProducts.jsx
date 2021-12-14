import React from 'react'
import Product from './Product'

const DisplayProducts = (props) => {

  const selectedProducts = props.products.map((product, index) => {
    return product.category === props.productCategory &&
      <Product
        key={index}
        product={product}
        addToCart={props.addToCart}
      />
  })

  return (
    <div className="product-list">
      {selectedProducts}
    </div>
  )
}

export default DisplayProducts