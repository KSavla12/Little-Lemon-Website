import React from 'react'
import small_logo from "../images/Logo .svg"

const Footer = () => {
  return (
    <div id="footer">
      <section>
        {/* <div className="company-info">
          <img src={small_logo} alt=""/>
          <p>
            We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.
          </p>
        </div> */}
        <div>
          <h3>Pages</h3>
        <ul>
          <li><a href="/">Home</a></li><br/>
          <li><a href="/">About</a></li><br/>
          <li><a href="/">Menu</a></li><br/>
          <li><a href="/">Reservations</a></li><br/>
          <li><a href="/">Order Online</a></li><br/>
          <li><a href="/">Login</a></li>
        </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Address: <br/> 123 Town Street, Chicago</li><br/>
            <li>Phone: <br/> +00 123 456 789</li><br/>
            <li>Email: <br/> little@lemon.com</li>
          </ul>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li><a href="/">Facebook</a></li><br/>
            <li><a href="/">Instagram</a></li><br/>
            <li><a href="/">Twitter</a></li>
          </ul>
        </div>
      </section>
      <div className='copyright'>
        <p>&copy; 2024 Little Lemon Ltd. All rights reserved.</p>
      </div>
    </div>
  )
}





        


export default Footer;