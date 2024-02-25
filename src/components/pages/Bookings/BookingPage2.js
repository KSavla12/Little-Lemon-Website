import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faClock, faUser } from '@fortawesome/free-regular-svg-icons'
import { faChampagneGlasses, faChair } from '@fortawesome/free-solid-svg-icons'

const BookingPage2 = ({handleChange, formData}) => {

  function getMonthName(monthNumber) {
    return new Date('1999-' + monthNumber + '-15').toLocaleString('en-us', { month: 'long' })
  }
  const dateFormat = getMonthName(formData.date.slice(5,7)) +', ' + formData.date.slice(8)

  return (
    <div>
      <div className='grid'>

        <div className='form-field'>
          <label htmlFor='firstName'>First name <span>&#42;</span></label>
          <input 
            className="input1" 
            name='firstName' 
            type="text" 
            placeholder="John"
            value={formData.firstName} 
            onChange={handleChange} 
            required
          />
        </div>

        <div className='form-field'>
          <label htmlFor='lastName'>Last name <span>&#42;</span></label>
          <input
           className="input1" 
           name='lastName' 
           type="text" 
           placeholder="Wick"
           value={formData.lastName}  
           onChange={handleChange} 
           required           
          />
        </div>

        <div className='form-field'>
          <label htmlFor='email'>Email <span>&#42;</span></label>
          <input
            className="input1" 
            name='email' 
            type="email" 
            placeholder="Example@email.com"
            value={formData.email}   
            onChange={handleChange} 
            required
          />
        </div>

        <div className='form-field'>
          <label htmlFor='phone'>Phone no. <span>&#42;</span></label>
          <input
            className="input1" 
            name='phone' 
            type="tel" 
            placeholder="012345 67890"
            value={formData.phone}   
            onChange={handleChange} 
            required              
          />
        </div>

        <table className='form-details'>
          <tbody>
            <tr>
              <td><p><FontAwesomeIcon icon={faCalendar}/> {dateFormat}</p></td>
              <td><p><FontAwesomeIcon icon={faClock}/> {formData.time}pm</p></td>
            </tr>
            <tr>
              <td><p><FontAwesomeIcon icon={faUser}/> {formData.guests}</p></td>
              <td><p><FontAwesomeIcon icon={faChampagneGlasses}/> {formData.occasion}</p></td>
            </tr>
            <tr>
              <td className="table-detail-last" colSpan={2}><p><FontAwesomeIcon icon={faChair} /> {formData.seating} seating</p></td>
            </tr>
          </tbody>
        </table>

        <button className="primary-btn" type="submit">Confirm Booking</button>
      </div>
    </div>
  )
}

export default BookingPage2