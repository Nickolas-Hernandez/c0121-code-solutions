import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.forwardMove(), 3000);
  }

  forwardMove() {
    const updatedState = Object.assign({}, this.state);
    const length = this.props.imagesData.length;
    if (updatedState.index === length - 1) {
      updatedState.index = 0;
      this.setState(updatedState);
      return;
    }
    updatedState.index++;
    this.setState(updatedState);
  }

  render() {
    const { imagesData } = this.props;
    const { index: i } = this.state;
    return (
      <div className="carousel">
        <ul className="frame">
          <Slide image={imagesData[i].relativePath} altText={imagesData[i]} />
        </ul>
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
    <li className="image-wrapper"><img src={props.image} alt={props.altText} /></li>
  );
}
