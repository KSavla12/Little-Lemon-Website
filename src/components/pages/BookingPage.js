import React from 'react'
import BookingForm from './Bookings/BookingForm'
import ConfirmedBooking from './Bookings/ConfirmedBooking'
import { useState, useReducer, useEffect } from "react"
import { fetchAPI, submitAPI } from './Bookings/bookingAPI'

const BookingPage = () => {

  const [date, setDate] = useState(new Date());
 
  function initializeTimes(date) {
    return fetchAPI(date)
  };

  function updateTimes(date) {
    const dateObj = new Date(date)
    return fetchAPI(dateObj)
  };

  function reducer(state, action) {
    let newState
    switch (action.type) {
      case 'UPDATE_TIMES':
      const newDate = new Date(action.payload);
      newState = updateTimes(newDate)
      break;

      default:
        throw new Error()
    };
    return newState
  };

  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes(date));

  const [submited, setSubmitted] = useState(false);
  const [data, setData] = useState('');

  function submitForm_(formData) {
    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      setData(formData)
      setSubmitted(true)
    }
  };

  //Current date
  const getCurrentDateInput = () => {
    const dateObj = new Date();

    const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
    const day = ("0" + dateObj.getDate()).slice(-2);
    const year = dateObj.getFullYear();

    const shortDate = `${year}-${month}-${day}`;

    return shortDate;
  };

  //Form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: getCurrentDateInput(),
    time: availableTimes[0],
    guests: '1',
    occasion: 'Birthday',
    seating: 'Indoor',
  });

  return (
    <>
      {!submited 
        ? <BookingForm 
            availableTimes={availableTimes} 
            // dispatch={dispatch} 
            submitForm_={submitForm_} 
            setFormData={setFormData}
            formData={formData}
            currentDate={getCurrentDateInput()}
          />
        : <ConfirmedBooking formData={formData}/>
      }
    </>
  )
};

export default BookingPage;

