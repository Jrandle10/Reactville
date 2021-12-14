import React, { useState } from 'react'
import '../../styles/super-market.css'

// Components & Data
import MarketNav from './MarketNav'
import DisplayProducts from './DisplayProducts'
import Cart from './Cart'
import { products }  from '../../data/market-data'


const SuperMarket = (props) => {
  console.log(products)
  const [cart, setCart] = useState([])
  const [productCategory, setProductCategory] = useState('Produce')

  const addToCart = (item) => {
    if (cart.find(prod => prod.id === item.id)) {
      setCart(cart.map((prod) => prod.id === item.id ? { ...prod, quantity: prod.quantity + 1 } : prod))
    } else {
      setCart([{ ...item, quantity: 1 }, ...cart])
    }
  }

  const removeFromCart = (item) => {
    console.log('removeFromCart works', item)
    if (item.quantity > 1) {
      setCart(cart.map((prod) => prod.id === item.id ? { ...item, quantity: item.quantity - 1 } : prod))
    } else {
      setCart(cart.filter((prod) => prod.id !== item.id))
    }
  }

  return (
    <div className="super-market">
      <section>
        <MarketNav
          products={products}
          setProductCategory={setProductCategory}
        />
        <DisplayProducts
          products={products}
          addToCart={addToCart}
          productCategory={productCategory}
        />
      </section>

      <Cart
        cart={cart}
        setCart={setCart}
        removeFromCart={removeFromCart}
        handleExchange={props.handleExchange}
      />
    </div>
  )
}

export default SuperMarket