import React from 'react'
import './styles/App.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router'


// Components
import Landing from './Components/Landing/Landing'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import Nav from './Components/Nav/Nav'
import SuperMarket from './Components/SuperMarket/SuperMarket'

const App = () => {
  const [cash, setCash] = useState(100)
  const [daytime, setDaytime] = useState(true)
  
  const handleExchange = (amt) => {
    if (cash - amt < 0) return false
    setCash((cash - amt).toFixed(2))
    return true
  }
  
  
  return (
    <>
      <main>
        <Nav cash={cash} setCash={setCash} daytime={daytime} setDaytime={setDaytime} />
        <Routes>
          <Route path="/" element={<Landing daytime={daytime} />} />
          <Route path="/burgers" 
          element={<BurgerShop />} 
          /> 
          <Route path="/market" 
            element={<SuperMarket handleExchange={handleExchange} />}
          />
        </Routes>
      </main>
    </>
  )
}

export default App