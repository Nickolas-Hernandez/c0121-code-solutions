import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.handleAccordion = this.handleAccordion.bind(this);
  }

  handleAccordion(event) {
    const parent = event.target.closest('.accordion-item');
    const text = parent.querySelector('.topic-details');
    text.classList.toggle('active');
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
      <h4 className="topic-header">{props.header}</h4>
      <p className='topic-details'>{props.text}</p>
    </div>
  );
}
