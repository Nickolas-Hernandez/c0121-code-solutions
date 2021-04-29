import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel.jsx';

const imageURLs = [
  {
    relativePath: '../images/001.png',
    alt: 'Bulbasaur'
  },
  {
    relativePath: '../images/004.png',
    alt: 'Charmander'
  },
  {
    relativePath: '../images/007.png',
    alt: 'Squirtle'
  },
  {
    relativePath: '../images/025.png',
    alt: 'Pikachu'
  },
  {
    relativePath: '../images/039.png',
    alt: 'Jiggly Puff'
  }
];

ReactDOM.render(
  <Carousel imagesData={imageURLs} />, document.getElementById('#root')
);
