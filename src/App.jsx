import React from 'react'
import './styles/App.css'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import Nav from './Components/Nav/Nav'
import { Route, Routes } from 'react-router'

// Components
import Landing from './Components/Landing/Landing'

const App = () => {
  const handleExchange = (amt) => {
    if (cash - amt < 0) return false
    setCash((cash - amt).toFixed(2))
    return true
  }
  
  
  return (
    <>
      <main>
      <Nav />
        <Routes>
        <Route path="/" element={<Landing />} />
          <Route path="/burgers" element={<BurgerShop />} /> 
          <Route path="/market" />
        </Routes>
      </main>
    </>
  )
}

export default App