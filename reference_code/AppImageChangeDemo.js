import React, { useState } from 'react';

const ImageChanger = () => {
  const [counter, setCounter] = useState(0);

  const images = [
    'floyd-alive.png',
    'floyd-dead.png',

  ];

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Image Changer</h1>
      <button onClick={decrementCounter}>-</button>
      <img src={images[counter % images.length]} alt="current image" />
      <button onClick={incrementCounter}>+</button>
    </div>
  );
};

export default ImageChanger;


//this didn't work