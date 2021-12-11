import React from 'react'
import '../../styles/super-market.css'

// Components & Data
import { products } from '../../data/market-data'
import { MarketNav } from './MarketNav'
import { DisplayProducts } from './DisplayProducts'
import { Cart } from './Cart'

const SuperMarket = () => {
  console.log(products)
  const [cart] = useState([])
  const [productCategory] = useState('Produce')
  return (
    <div className="super-market">
      <section>
        <MarketNav />
        <DisplayProducts />
      </section>

      <Cart />

    </div>
  )
}

export default SuperMarket