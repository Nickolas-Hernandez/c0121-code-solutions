import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  // createSlides() {
  //   const allSlides = this.props.imagesData.map(image => {
  //     return <Slide key={image.key} image={image.relativePath} alt={image.alt} />;
  //   });
  //   return allSlides;
  // }

  render() {
    // const slides = this.createSlides();
    const { imagesData } = this.props;
    console.log(this.props);
    console.log(this.props);

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
