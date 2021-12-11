import React from 'react'
import { useState } from 'react'
import '../../styles/burger.css'
import IngredientList from "./IngredientList"
import BurgerStack from "./BurgerStack"

import { ingredients } from '../../data/burger-data'

const BurgerShop = (props) => {
  const [stack, setStack] = useState([])
  console.log(ingredients)

  function addToBurger(ingredient) {
    setStack([...stack, ingredient])
  }

  function removeFromBurger (index) {
    setStack(stack.filter((ing, idx) => idx !== index))

  }
  
  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button onClick={setStack}>Clear Order</button>
      </nav>
      <section>
        <IngredientList 
        ingredients={ingredients}
        addToBurger={addToBurger}
        />
        <BurgerStack ingredients={stack} removeFromBurger={removeFromBurger} />
      </section>
    </div>
  )
}

export default BurgerShop