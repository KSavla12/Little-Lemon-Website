import React from 'react'
import './LocationPage.css';

const LocationPage = () => {
  return (
    <section id='location'>

    <div className='container'>

      <h2>Location</h2>

      <br />
      <div className='location-details grid'>
        <div>
          <div>
            <h4>Address</h4>
            <p>123 Town Street</p>
            <p>Chicago</p>
            <p>AB1 3CD</p>
            <p></p>
          </div>
          <br />
          <div>
            <h4>Phone</h4>
            <p>+00 123 456 789</p>
          </div>
        </div>
        <div className='times'>
          <h4>Opening Hours</h4>
          <p>Mon 10:00 - 22:00</p>
          <p>Tue 10:00 - 22:00</p>
          <p>Wed 10:00 - 22:00</p>
          <p>Thr 10:00 - 22:00</p>
          <p>Fri 10:00 - 22:00</p>
          <p>Sat 11:00 - 23:00</p>
          <p>Sun 11:00 - 20:00</p>
        </div>
      </div>

      <br />
      <div className='map'>
       
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11884.694571692758!2d-87.66589887715702!3d41.86761036924442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2d1cb514cf3d%3A0x17aa02bd083daace!2sLittle%20Italy%2C%20Chicago%2C%20IL%2C%20USA!5e0!3m2!1sen!2suk!4v1709589473857!5m2!1sen!2suk" 
          style={{border:"0"}} 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
        >

        </iframe>
      </div>


    </div>
      
    </section>
  )
}

export default LocationPage