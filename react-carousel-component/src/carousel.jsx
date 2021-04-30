import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  createSlides() {
    const allSlides = this.props.imagesData.map(image => {
      return <Slide key={image.key} image={image.relativePath} alt={image.alt} />;
    });
    return allSlides;
  }

  render() {
    const slides = this.createSlides();
    return (
      <div className="carousel">
        <div className="frame">{slides}</div>
        <i className="fas fa-caret-left control-arrow"></i>
        <div className="circle-container">
          <i className="far fa-circle circle"></i>
          <i className="fas fa-circle circle"></i>
          <i className="fas fa-circle circle"></i>
          <i className="fas fa-circle circle"></i>
          <i className="fas fa-circle circle"></i>
        </div>
        <i className="fas fa-caret-right control-arrow"></i>
      </div>
    );
  }
}

function Slide(props) {
  return (
    <img src={props.image} alt={props.alt}/>
  );
}
