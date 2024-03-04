import React from 'react'
import './ConfirmedBooking.css';
import { CheckCircleIcon, CircleIcon  } from '@chakra-ui/icons'

const ConfirmedBooking = (props) => {

  const capitalizedName = (name) =>
  name.charAt(0).toUpperCase()
    + name.slice(1)

  return (
    <section id="confirmation">

      <div className='confirm-title'>
        <h2>Reservation Confirmed</h2>
        <CheckCircleIcon w={40} h={40} color='green' verticalAlign='top' />
      </div> 

      <div className='display-message'>
        <p>
          Dear <span style={{fontWeight:"bold"}}>{capitalizedName(props.formData.firstName)}  
          &nbsp;{capitalizedName(props.formData.lastName)}</span>,
        </p>
        <br />
        <p>
          Your table for party of {props.formData.guests} is reserved for {props.formData.time}pm 
          at {props.formData.date}.</p>
        <p>
          We will see you soon for the {props.formData.occasion} event!
        </p>
      </div>

    </section>
  )
}

export default ConfirmedBooking