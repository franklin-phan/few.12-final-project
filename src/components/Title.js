// src/Title.js

import React from 'react'
import './Title.css';
import { NavLink } from 'react-router-dom'

function Title() {
    return (
      <div className="Title">
        <header>
          <h1>Virtual Pantry</h1>
          <div className="Title-Subtitle">Track Your Food Online</div>
  
          <div>
          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            exact
            to="/">Home</NavLink>
          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            to="/form">About</NavLink>
          {/* <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            to="/about">Login</NavLink>            
          
          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            to="/about">Sign Up</NavLink>       */}
          </div>


  
        </header>
      </div>
    )
  }

export default Title