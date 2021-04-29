import React from 'react';

export default class Carousel extends React.Component {

  render() {
    return (
      <div className="carousel">
        <i className="fas fa-caret-left"></i>
        <div className="circle-container">
          <i className="far fa-circle circle"></i>
          <i className="fas fa-circle circle"></i>
          <i className="fas fa-circle circle"></i>
          <i className="fas fa-circle circle"></i>
          <i className="fas fa-circle circle"></i>
        </div>
        <i className="fas fa-caret-right"></i>
      </div>
    );
  }
}

// create render funtion that renders basic slide
