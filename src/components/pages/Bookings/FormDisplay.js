import React from 'react';
import './FormDisplay.css';

import RestaurantInterior from './assets/Restaurant-Interior.webp';
import Restaurantfood from './assets/Restaurant-food.webp';

const FormDisplay = () => {
  return (
    <div id='form-display' className='grid'>
      <div>
        <img src={RestaurantInterior} alt="RestaurantInterior" />
      </div>
      <div>
        <img src={Restaurantfood} alt="Restaurantfood" />
      </div>
    </div>
  )
}

export default FormDisplay