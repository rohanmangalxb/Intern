import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <NavLink className={(e) => e.isActive? "bg-col" : ""} to="/Home"><li>Home</li></NavLink>
        <NavLink className={(e) => e.isActive? "bg-col" : ""} to="/About"><li>About</li></NavLink>
        <NavLink className={(e) => e.isActive? "bg-col" : ""} to="/Contact"><li>Contact</li></NavLink>
    </nav>
  )
}

export default Navbar
