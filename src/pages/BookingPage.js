import React from 'react'
import BookingForm from '../components/BookingForm'
import { useState, useReducer, useEffect } from "react"
import { fetchAPI, submitAPI } from '../components/bookingAPI'
import { Route, Routes, useNavigate } from "react-router-dom";

const BookingPage = () => {

//////////////////////////////////////////////////////

  // const reducer = (availableTimes, action) => {

  // }

  // const [availableTimes, dispatch ] = useReducer(initializeTimes, updateTimes)
  
  // function updateTimes(availableTimes, date) {
  //   return {availableTimes: fetchAPI(new Date(date))}
  // }

  // function initializeTimes() {
  //   return ['17:00', '18:00', '19:00', '20:00', '21:00']
  // }


  /////////////////////////////////////////
  const [date, setDate] = useState(new Date())
 
  function initializeTimes(date) {
    return fetchAPI(date)
    }

  function updateTimes(date) {
    const dateObj = new Date(date)
    return fetchAPI(dateObj)
  }

  const navigate = useNavigate();

  function submitForm(formData) {
    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      navigate("/confirmed");
    }
  }
  
  function reducer(state, action) {
    let newState
    switch (action.type) {
      case 'UPDATE_TIMES':
      const newDate = new Date(action.payload);
      newState = updateTimes(newDate)
      break;

      default:
        throw new Error()
    }
    return newState
  }

  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes(date))
  ////////////////////////////////

  return (
    <>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
    </>
  )
}

export default BookingPage

