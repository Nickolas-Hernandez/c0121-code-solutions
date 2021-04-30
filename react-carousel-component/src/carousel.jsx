import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
    this.forwardMove = this.forwardMove.bind(this);
    // this.backwardMove = this.backwardMove.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.forwardMove(), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  resetTimer() {
    clearInterval(this.timerID);
    this.timerID = setInterval(() => this.forwardMove(), 3000);
  }

  forwardMove(event) {
    const updatedState = Object.assign({}, this.state);
    const length = this.props.imagesData.length;
    if (updatedState.index === length - 1) {
      updatedState.index = 0;
      this.setState(updatedState);
      if (event) this.resetTimer();
      return;
    }
    updatedState.index++;
    this.setState(updatedState);
    if (event) this.resetTimer();
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
        <i className="fas fa-caret-right control-arrow"
        onClick={this.forwardMove}></i>
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
