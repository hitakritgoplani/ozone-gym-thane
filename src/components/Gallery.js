import React from 'react';
import '../Gallery.css';
import ozoneImage from '../images/ozone.jpg'
import wholeImage from '../images/whole.jpg'

export default function Gallery() {
  const images = [
	ozoneImage,
	wholeImage
  ];

  return (
    <div className='photo-div'>
      {images.map((image, i) => (
        <img src={image} className='photos' key={i} alt={`Image ${i + 1}`} />
      ))}
    </div>
  );
}