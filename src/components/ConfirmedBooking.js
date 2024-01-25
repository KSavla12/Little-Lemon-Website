import React from 'react'
import { CheckCircleIcon, CircleIcon  } from '@chakra-ui/icons'

const ConfirmedBooking = (props) => {

  console.log(props)
  return (
    <section id="confirmation">

      <div className='confirm-title'>
        <h2>Reservation Confirmed</h2>
        <CheckCircleIcon w={40} h={40} color='green' verticalAlign='top' />
      </div> 

      <div className='display-message'>
        <p>Dear <span style={{fontWeight:"bold"}}>{props.formData.firstName} {props.formData.lastName}</span>,</p>
        <p>Your table for party of {props.formData.guests} is reserved for {props.formData.time}pm at {props.formData.date}.</p>
        <p>We will see you soon for the {props.formData.occasion} event!</p>
      </div>

    </section>
  )
}

export default ConfirmedBooking