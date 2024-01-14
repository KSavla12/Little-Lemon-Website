import React from 'react'
import Card from './Card';
import specials from "./specials";
import restauranfood from "../images/restauranfood.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@chakra-ui/react";

const Main = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className='flex-container' id='hero-section'>
        <div className='flex-column col-1'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button>Reserve a Table</button>
        </div>
        <div className='flex-column'>
          <img className="hero-image" src={restauranfood} alt="" />
        </div>
      </div>
      {/* Highlights */}
      <div className='flex-container' id='highlights'>
        <h1>This week specials!</h1>
        <button>Online Menu</button>

        <div className='showcase'>
          <Box
            display="grid"
            gridTemplateColumns="repeat(3,minmax(200px, 1fr))"
            gridGap={30}
            spacing={4}
            >
            {specials.map((special) => (
              <Card
                key={special.title}
                title={special.title}
                price={special.price}
                description={special.description}
                imageSrc={special.getImageSrc()}
              />
            ))}
          </Box>
        </div>

      </div>

      {/* Testimonmials */}

      {/* About */}

    </div>
  )
}

export default Main