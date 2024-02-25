import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';


const Card = ({ special }) => {
  return (
    <div className="card">
      
      <div className="special-card-img">
        <img src={special.image} alt={special.title} />
      </div>
      
      <div className="special-card-header">
        <h3>{special.title}</h3>
        <span>{special.price}</span>
      </div>

      <div className="special-card-body-footer">
        <p>{special.description}</p>
        <a>Order a delivery <FontAwesomeIcon icon={faMotorcycle}/></a>
      </div>
      
    </div>
  );
};

export default Card;

