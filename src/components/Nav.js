import React from 'react'
import logo from "../images/Logo .svg";

const Nav = () => {
  return (
    <nav id='navbar'>
      <img src={logo} alt="" />
      <ul className='nav-links'>
        <a href="">
          <li>
            HOME
          </li>
        </a>
        <a href="">
          <li>
            ABOUT
          </li>
        </a>
        <a href="">
          <li>
            MENU
          </li>
        </a>
        <a href="">
          <li>
            RESERVATIONS
          </li>
        </a>
        <a href="">
          <li>
            ORDER ONLINE
          </li>
        </a>
        <a href="">
          <li>
            LOGIN
          </li>
        </a>
      </ul>
    </nav>
  )
}

export default Nav