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
    const allItems = this.props.topics.map(topic => {
      return (
        <AccordionItem
          key={topic.key}
          header={topic.header}
          text={topic.text}
          />
      );
    });
    return (
      <ul className="accordion" onClick={this.handleAccordion}>
        {allItems}
      </ul>
    );
  }
}

function AccordionItem(props) {
  return (
    <div className='accordion-item'>
        <div className="topic-header">
          <h4>{props.header}</h4>
        </div>
        <div className='topic-details'>
          <p>{props.text}</p>
        </div>
      </div>
  );
}
