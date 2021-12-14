import React, { useEffect, useState } from "react"
import Ingredient from "./Ingredient"

const IngredientList = (props) => {
	
	return (
		<ul>
		{props.ingredients.map((ingredient, index) => {
			return <Ingredient
				ingredient={ingredient}
				key={index}
				isList="true"
				addToBurger={props.addToBurger}
			/>
		})}
	</ul>
	)
}

export default IngredientList