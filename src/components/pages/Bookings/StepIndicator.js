import React from 'react';
import './StepIndicator.css';

const StepIndicator = ({FormSection1, setFormSection1, dateValidation}) => {

  return (
    <div className='stepIndicator'>
      <p 
        className={FormSection1 ? null : 'activeLink'} 
        onClick={() => setFormSection1(false)}
      >1</p>

      <hr />

      <p 
        className={FormSection1 ? 'activeLink' : null} 
        onClick={() => dateValidation() ? setFormSection1(true) : null}
      >2</p>
    </div>
  );
};

export default StepIndicator

