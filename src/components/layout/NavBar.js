import React from 'react'
import './NavBar.css';
import logo from "./assets/Logo .svg";
import { Link, NavLink } from "react-router-dom";
import { useState } from 'react';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NavBar = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  
  return (
    
    <nav className="container grid nav-bar">
      <NavLink to="/" className='nav-bar-logo'>
        <img src={logo} alt=""/>
      </NavLink>
      <button 
        className="nav-bar-hamburger" 
        type="button" 
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        {isNavExpanded ?
          <FontAwesomeIcon icon={faXmark} size="2x" /> : 
          <FontAwesomeIcon icon={faBars} size="2x" />}
      </button>
      <ul 
        className={isNavExpanded ? 'nav-bar-links expanded' : 'nav-bar-links'} 
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
      
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'active-page' : null}>
            HOME
          </NavLink>
        </li>
 
        <li>
          <NavLink to="/">ABOUT</NavLink>
        </li>

        <li>
          <NavLink to="/">MENU</NavLink>
        </li>
      
        <li>
          <NavLink 
            to="booking" 
            className={({ isActive }) => isActive ? 'active-page' : null}>
            RESERVATIONS
          </NavLink>
        </li>
         
      </ul>
    </nav>
  )
}

export default NavBar