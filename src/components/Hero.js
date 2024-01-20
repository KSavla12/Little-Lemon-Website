import React from 'react'
import restauranfood from "../images/restauranfood.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className='flex-container' id='hero-section'>
        <div className='flex-column col-1'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button><Link to="/booking">Reserve a Table</Link></button>
        </div>
        <div className='flex-column'>
          <img className="hero-image" src={restauranfood} alt="" />
        </div>
      </div>
    </>
  )
}

export default Hero