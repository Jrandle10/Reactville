import React from 'react'
import { NavLink } from 'react-router-dom'


// Components & Assets
import Logo from '../../assets/react-logo.png'
import Wallet from "./Wallet"


const Nav = (props) => {
  console.log(Logo)
  return (
    <nav className="navigation-bar">
      <NavLink to="/" id="logo"><img src="Logo"></img></NavLink>
      <NavLink to="/burgers">BURGERSHOP</NavLink>
      <NavLink to="/market">SUPER MARKET</NavLink>
      <Wallet cash={props.cash} />
    </nav>
  )
}

export default Nav