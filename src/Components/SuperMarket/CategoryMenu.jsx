import React from 'react'

const CategoryMenu = (props) => {
  const categories = [...new Set(props.products.map((product) => product.category))]
  console.log(categories)
  return (
    <select onChange={(e) => props.setProductCategory(e.target.value)}>
      {categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  )
}

export default CategoryMenu