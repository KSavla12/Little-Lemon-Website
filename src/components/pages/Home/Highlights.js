import React from 'react';
import './Highlights.css';
import Card from './HighlightsCard';
import specials from "./weekSpecialsInfo";

const Highlights = () => {
  return (
    <section>
      <div className='container grid highlights'>
        <div className='week-specials-header'>
          <h1>This week specials!</h1>
          <button className='primary-btn'>Online Menu</button>
        </div>
        <>
          {specials.map((special, index) => (
            <Card
              key={index}
              special={special}
            />
          ))}
        </>
      </div>
    </section>
  )
}

export default Highlights