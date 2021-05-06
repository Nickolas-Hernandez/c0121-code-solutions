import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: null };
    this.handleAccordion = this.handleAccordion.bind(this);
  }

  handleAccordion(event) {
    const clickedItem = event.target.id;
    if (this.state.activeIndex === clickedItem) {
      this.setState({ activeIndex: null });
      return;
    }
    this.setState({ activeIndex: clickedItem });
  }

  render() {
    const allItems = this.props.topics.map(topic => {
      return (
        <AccordionItem
        key={topic.key}
        topicId={topic.key}
        topicHeader={topic.header}
        topicText={topic.text}
        textClass={topic.key.toString() === this.state.activeIndex ? 'item-text active' : 'item-text'}
        openText={this.handleAccordion}
        />
      );
    });
    return (
      <ul className="accordion">
        {allItems}
      </ul>
    );
  }
}

function AccordionItem(props) {
  return (
    <li className="accordion-item">
      <h4 className="item-header"
      id={props.topicId}
      onClick={props.openText}>
        {props.topicHeader}
      </h4>
      <p className={props.textClass}>
        {props.topicText}
      </p>
    </li>
  );
}
