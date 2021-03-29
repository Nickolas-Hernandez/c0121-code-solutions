import React from 'react';

const topics = [
  {
    topic: 'Hypertext Markup Language',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ut adipisci ea beatae dolore ad dignissimos voluptatem ratione molestias vel.',
    key: 1
  }
];

class Accordion extends React.Component {
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
      <>
        <div onClick={this.handleAccordion} className="topic-header">
          <h4>{}</h4>
        </div>
        <div className={this.state.isOpen ? 'topic-details active' : 'topic-details'}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ut adipisci ea beatae dolore ad dignissimos voluptatem ratione molestias vel.</p>
        </div>
      </>
    );
  }
}

export default Accordion;

// define a single topic
