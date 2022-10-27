import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink to="/Thoughts" className={"button"}>Forum</NavLink>
      <NavLink to="/Share" className={"button"}>Share</NavLink>
      <NavLink to="/" className={"button"}>About</NavLink>
    </nav>
  )
}

export default NavBar;