import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = props => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <NavLink exact to="/" className="navbar-brand">News React</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/recommend" className="nav-link">Hand-picked for you</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/profile" className="nav-link">Profile</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header