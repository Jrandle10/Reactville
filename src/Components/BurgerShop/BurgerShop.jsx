import React, { useState } from 'react'
import '../../styles/burger.css'
import IngredientList from "./IngredientList"
import BurgerStack from "./BurgerStack"

import { ingredients } from '../../data/burger-data'

const BurgerShop = (props) => {
  const [ stack, setStack ] = useState([])
  console.log(ingredients)

const addToBurger = (ingredient) => {
  setStack([ingredient, ...stack])
}

  function removeFromBurger (index) {
    setStack(stack.filter((ele, i) => i !== index))
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