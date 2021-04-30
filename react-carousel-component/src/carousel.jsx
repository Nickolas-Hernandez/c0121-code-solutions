import React from 'react';
// import Circles from './circles';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.forwardMove(), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
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
        <Circles data={imagesData} activeIndex={i}/>
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

function Circles(props) {
  const circles = props.data.map(circle => {
    const circleId = props.data.indexOf(circle);
    return <Circle key={circleId} circleId={circleId} activeCircle={props.activeIndex} />;
  });
  return (
    <div className="circle-container">{circles}</div>
  );
}

function Circle(props) {
  const { circleId, activeCircle } = props;
  return (
    <i
      className={ activeCircle === circleId ? 'far fa-circle circle' : 'fas fa-circle circle'}
      id={circleId}></i>
  );
}
