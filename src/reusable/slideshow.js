import React, { useState, useEffect } from 'react';
import '../components/styles.css';

const images = [
  'https://via.placeholder.com/1920x1080?text=Slide+1',
  'https://via.placeholder.com/1920x1080?text=Slide+2',
  'https://via.placeholder.com/1920x1080?text=Slide+3',
];

function Slideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen bg-cover bg-center relative">
      {images.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Slide ${index + 1}`}
          className={`absolute bg-image top-0 left-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
      ))}
      
    </div>
  );
}

export default Slideshow;

/*

import React from 'react';
import Slideshow from './Slideshow';

function App() {
  return (
    <div className="App">
      <h1>Background Picture Slideshow</h1>
      <Slideshow />
    </div>
  );
}

export default App;


*/