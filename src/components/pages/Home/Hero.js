import React from 'react'
import './Hero.css';
import restauranfood from "./assets/restauranfood.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className='hero'>
      <div className='container grid' id='hero-section'>
        <div className='hero-info'>
          <h1><span style={{color:'white'}}>Little</span> Lemon</h1>
          <h3>Chicago</h3>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Link to="/booking"><button className='primary-btn'>Reserve a Table</button></Link>
        </div>

        <img className='hero-img' src={restauranfood} alt="" />
       
      </div>
    </section>
  )
}

export default Hero