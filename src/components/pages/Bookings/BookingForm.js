import React from 'react'
import './BookingForm.css';
import { useState } from "react"

import BookingPage1 from './BookingPage1';
import BookingPage2 from './BookingPage2';
import FormDisplay from './FormDisplay';
import StepIndicator from './StepIndicator';

const BookingForm = ({ availableTimes, submitForm_, setFormData, formData, currentDate }) => {

  //Form page check
  const [formSection1, setFormSection1] = useState(false)

  //Date validation
  function dateValidation() {
    if(formData.date.length === 0) {
      alert("Please enter date")
    } else if(formData.date < currentDate) {
      alert("Error please enter a valid date")
    } else {
      return true
    }
  };

  //Handle form data input
  const handleChange = (e) => {

    console.log(e.target)
    const name = e.target.name
    const value = e.target.value

    setFormData({
      ...formData,
      [name]:value
    })
    console.log(formData)
  };
  console.log(formData)


  // let formData_ = ''

  const submitForm = (e) => {
    e.preventDefault()

    // const formData = new FormData(e.target)
    // const payload = Object.fromEntries(formData)

    // formData_ = payload

    // console.log('formData_', formData_)
    
    // props.submitForm(payload)

    console.log('formData', formData)
    submitForm_(formData)
  }
  

  return (
    <section>
      <div id="form">
        <h2>Table Reservation</h2>

        <StepIndicator 
          FormSection1={formSection1} 
          setFormSection1={setFormSection1} 
          dateValidation={dateValidation}
        />
    
        <form onSubmit={submitForm} className=''>
          {!formSection1
            ? <BookingPage1 
                availableTimes={availableTimes}
                setFormSection1={setFormSection1}
                handleChange={handleChange}
                setFormDetails={setFormData}
                dateValidation={dateValidation}
                formData={formData}
              /> 
            : <BookingPage2  
                handleChange={handleChange}
                formData={formData}
              />  
          }
        </form>
      </div>

      <FormDisplay />

    </section>
    
  )
}

export default BookingForm
