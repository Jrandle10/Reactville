import React from 'react'
import { NavLink } from 'react-router-dom'
import Wallet from './wallet'

// Components & Assets
import Logo from '../../assets/react-logo.png'

const Nav = (props) => {
  console.log(Logo)
  return (
    <nav className="navigation-bar">
      <NavLink to="/" id="logo"><img src="Logo"></img></NavLink>
      <NavLink to="/burgers">Burgershop</NavLink>
      <NavLink to="/market">SUPER MARKET</NavLink>
      <Wallet cash={props.cash} />
    </nav>
  )
}

export default Nav