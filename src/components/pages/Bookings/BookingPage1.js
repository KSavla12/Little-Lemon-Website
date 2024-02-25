import React from 'react';
import './BookingForm.css';

const BookingPage1 = (props) => {
  console.log()
  return (
    <div className='grid'>

      <div className='form-field'>
        <label htmlFor='date'>Date <span>&#42;</span></label>
        <input 
          className="input1" 
          name='date' 
          type="date" 
          value={props.formData.date}
          onChange={props.handleChange} 
          required            
        />
      </div>

      <div className='form-field'>
        <label htmlFor='time'>Time <span>&#42;</span></label>
        <select
          className="input1" 
          name="time" 
          value={props.formData.time}
          onChange={props.handleChange} 
          required
        >
          {props.availableTimes.map((times) =>
            <option key={times}>{times}</option>
          )}
        </select>
      </div>

      <div className='form-field'>
        <label htmlFor='guests'>Number of guests <span>&#42;</span></label>
        <input
          className="input1" 
          name='guests' 
          type="number" 
          placeholder="1" 
          min="1" max="10" 
          value={props.formData.guests}
          onChange={props.handleChange} 
        />
      </div>

      <div className='form-field'>
        <label htmlFor='occasion'>Occasion <span>&#42;</span></label>
        <select 
          className="input1" 
          name='occasion' 
          value={props.formData.occasion}
          onChange={props.handleChange} 
          required
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <div className='form-field'>
        <label htmlFor="seating" className='radio'>
          <input 
            type="radio" 
            name="seating" 
            value="Indoor" 
            checked={props.formData.seating === 'Indoor' ? true : false}
            onChange={props.handleChange}
          />
          Indoor seating
        </label>
        <label htmlFor="seating" className='radio'> 
          <input
            type="radio" 
            name="seating" 
            value="Outdoor"
            checked={props.formData.seating === 'Outdoor' ? true : false} 
            onChange={props.handleChange}
          />
          Outdoor seating
        </label> 
      </div>

      <button 
        className="primary-btn" 
        type="button" 
        onClick={ () => props.dateValidation() ? props.setFormSection1(true) : null }
      >
        Next
      </button>

    </div>
  )
}

export default BookingPage1