import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500, 
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className=" mx-auto px-4">
      <Slider {...settings} className="carousel">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src="http://localhost:3000/img/bg1.jpg" alt="Slide 1" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src="http://localhost:3000/img/bg4.jpg" alt="Slide 2" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src="http://localhost:3000/img/bg5.jpg" alt="Slide 3" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
}

export default Carousel;

/*

npm install react-slick

*/