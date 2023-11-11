import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carou_1 from '../assets/images/1.jpeg'; // Replace with your kaftan image
import carou_2 from '../assets/images/2.jpeg'; // Replace with your Agbada image
import carou_3 from '../assets/images/3.jpeg'; // Replace with your kaftan image
import carou_5 from '../assets/images/5.jpeg'; // Replace with your kaftan image

import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={5000} // Set the auto-slide interval in milliseconds (e.g., 5 seconds)
      showThumbs={false} // Hide thumbnail navigation
      showStatus={false} // Hide status indicator
      showArrows={false} // Hide next and previous buttons
      stopOnHover={false} // Do not pause on hover
      className="carousel"
    >
<div className="carousel-slide">
  <img src={carou_1} alt="Kulture Jacket" />
  <div className="carousel-text">
    <p>Explore the stylish Kulture Jacket designed for warriors like you.</p>
    <Link className="explore-collection-button" to="collections/agbada">
      Explore Kulture Jacket Collection
    </Link>
  </div>
</div>

<div className="carousel-slide">
  <img src={carou_5} alt="Kulture Cargo Pants" />
  <div className="carousel-text">
    <p>Dive into the rugged world with our Kulture Cargo Pants collection.</p>
    <Link className="explore-collection-button" to="collections/agbada">
      Explore Kulture Cargo Pants Collection
    </Link>
  </div>
</div>

<div className="carousel-slide">
  <img src={carou_2} alt="Kulture 2 Piece" />
  <div className="carousel-text">
    <p>Experience elegance with our Kulture 2 Piece Collection.</p>
    <Link className="explore-collection-button" to="collections/agbada">
      Explore Kulture 2 Piece Collection
    </Link>
  </div>
</div>

<div className="carousel-slide">
  <img src={carou_3} alt="Kulture Shirt" />
  <div className="carousel-text">
    <p>Upgrade your wardrobe with the iconic Kulture Shirt Collection.</p>
    <Link className="explore-collection-button" to="collections/agbada">
      Explore Kulture Shirt Collection
    </Link>
  </div>
</div>
     

    </Carousel>
  );
};

export default Hero;
