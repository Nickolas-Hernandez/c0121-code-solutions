import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isPlaying: false
    };
    this.handleStopwatch = this.handleStopwatch.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleStopwatch() {
    if (!this.state.isPlaying) {
      this.intervalId = setInterval(() => {
        this.setState(state => {
          return {
            counter: state.counter + 1,
            isPlaying: true
          };
        });
      }, 1000);
    } else {
      clearInterval(this.intervalId);
      this.setState(state => {
        return {
          counter: state.counter,
          isPlaying: false
        };
      });
    }
  }

  reset() {
    if (this.state.isPlaying === false) {
      this.setState({
        counter: 0,
        isPlaying: false
      });
    }
  }

  render() {
    let buttonClass;
    if (this.state.isPlaying) buttonClass = 'fas fa-pause';
    else buttonClass = 'fas fa-play';
    return (
      <div className="container">
        <div onClick={this.reset} className="face">
          <span>{ this.state.counter }</span>
        </div>
        <i onClick={this.handleStopwatch} className={buttonClass}></i>
      </div>
    );
  }

}

export default Stopwatch;
