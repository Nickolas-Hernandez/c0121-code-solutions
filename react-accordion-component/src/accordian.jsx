import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.handleAccordion = this.handleAccordion.bind(this);
    this.state = { isOpen: false };
  }

  handleAccordion(event) {
    if (this.state.isOpen) this.setState({ isOpen: false });
    else this.setState({ isOpen: true });
  }

  render() {
    return (
      <div className='accordion-item'>
        <div onClick={this.handleAccordion} className="topic-header">
          <h4>{this.props.topics[0].header}</h4>
        </div>
        <div className={this.state.isOpen ? 'topic-details active' : 'topic-details'}>
          <p>{this.props.topics[0].text}</p>
        </div>
      </div>
    );
  }
}
