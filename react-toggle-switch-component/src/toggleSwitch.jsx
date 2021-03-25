import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ isOn: false });
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    if (this.state.isOn === false) this.setState({ isOn: true });
    else this.setState({ isOn: false });
  }

  render() {
    return (
      <div className="switch-container">
        <div
          onClick={(this.handleToggle)}
          className={this.state.isOn ? 'active' : '' }
          id="switch"
        >
            <div
              className={this.state.isOn ? 'active' : ''}
              id="circle"
            ></div>
        </div>
        <span>
          {this.state.isOn ? 'On' : 'Off'}
        </span>
      </div>
    );
  }
}

export default ToggleSwitch;
