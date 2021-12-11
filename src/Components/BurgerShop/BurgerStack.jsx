import React from "react"
import Ingredient from "./Ingredient"

const BurgerStack = (props) => {
  return (
    <ul className="burger-stack">
      {props.ingredients.length ?
        props.ingredients.map((ingredient, index) => (
          <Ingredient
            key={index}
            idx={index}
            ingredient={ingredient}
            removeFromBurger={props.removeFromBurger}
          />
        )).reverse()
        :
        <div>
          No Ingredients
        </div>
      }
    </ul>
  )
}

export default BurgerStack