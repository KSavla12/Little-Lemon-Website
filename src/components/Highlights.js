import React from 'react';
import { Box } from "@chakra-ui/react";
import Card from './Card';
import specials from "./specials";

const Highlights = () => {
  return (
    <>
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
    </>
  )
}

export default Highlights