import React from 'react'
import { useState } from "react"

const BookingForm = (props) => {

  // const [formData, setFormData] = useState({
    
  // }) 

  const submitForm = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const payload = Object.fromEntries(formData)

    console.log(payload)
    props.submitForm(payload)
  }

  return (
    <section id="form">
      <h2>Reserve a table</h2>
      <form style={{display:"grid", maxWidth:"200px", gap:"20px"}} onSubmit={submitForm}>
        <div className='user-details'>
          <div className='col col-1'>
            <label htmlFor="res-name">Full name</label>
            <input type="text" id="res-name" placeholder="Enter full name" name='fullName' required></input>
          </div>
          <div className='col col-2'>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" name='date' required></input>
          </div>
          <div className='col col-3'>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" name='time'>
              {props.availableTimes.map((times) =>
                <option key={times}>{times}</option>
              )}
            </select>
          </div>
          <div className='col col-4'>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" name='guests' defaultValue={1}></input>
          </div>
          <div className='col col-5'>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name='occasion'>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default BookingForm