import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  createSlide() {

  }

  render() {
    return (
      <div className="carousel">
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
    <li className="frame"><img src={props.image} alt={props.alt}/></li>
  );
}
