import React from 'react'
import './Footer.css';
import small_logo from "./assets/footerLogo.png"
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container grid">
        <img className='footer-logo' src={small_logo} alt="" />

        <div className='footer-nav'>
          <h4>SITEMAP</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/booking">Reservations</a></li>
          </ul>
        </div>

        <div className='footer-contact'>
          <h4>CONTACT US</h4>
          <ul>
            <li><FontAwesomeIcon icon={faLocationDot} size="1x"/>&nbsp; 123 Town Street, Chicago</li>
            <li><FontAwesomeIcon icon={faPhone} size="1x" />&nbsp; +00 123 456 789</li>
            <li><FontAwesomeIcon icon={faEnvelope} size="1x" />&nbsp; little@lemon.com</li>
          </ul>
        </div>

        <div className='footer-social'>
          <h4>CONTECT WITH US</h4>
          <ul>
            <li><a href="/"><FontAwesomeIcon icon={faFacebook} size="lg" /></a></li>
            <li><a href="/"><FontAwesomeIcon icon={faInstagram} size="lg" /></a></li>
            <li><a href="/"><FontAwesomeIcon icon={faTwitter} size="lg" /></a></li>
          </ul>
        </div>
        
        <div className='copyright'>
          <p>&copy; 2024 Little Lemon Ltd. All rights reserved.</p>
        </div>
      </div> 
    </footer>
  )
}





        


export default Footer;