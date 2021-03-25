import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleTemp = this.handleTemp.bind(this);
  }

  handleTemp() {
    this.setState(state => ({ clicks: state.clicks + 1 }));
  }

  render() {
    let cssClass;
    if (this.state.clicks >= 15) cssClass = 'nuclear';
    else if (this.state.clicks >= 12) cssClass = 'hot';
    else if (this.state.clicks >= 9) cssClass = 'warmer';
    else if (this.state.clicks >= 6) cssClass = 'warm';
    else if (this.state.clicks >= 3) cssClass = 'cold';
    else if (this.state.clicks < 3) cssClass = 'freezing';
    return (
      <button onClick={(this.handleTemp)} className={cssClass}>
        Hot Button
      </button>
    );
  }
}

export default HotButton;
