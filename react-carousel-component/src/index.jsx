import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const imageURLs = [
  {
    key: 1,
    relativePath: '../images/001.png',
    alt: 'Bulbasaur'
  },
  {
    key: 2,
    relativePath: '../images/004.png',
    alt: 'Charmander'
  },
  {
    key: 3,
    relativePath: '../images/007.png',
    alt: 'Squirtle'
  },
  {
    key: 4,
    relativePath: '../images/025.png',
    alt: 'Pikachu'
  },
  {
    key: 5,
    relativePath: '../images/039.png',
    alt: 'Jiggly Puff'
  }
];

ReactDOM.render(
  <Carousel imagesData={imageURLs} />,
  document.getElementById('root')
);
