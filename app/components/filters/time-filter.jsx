import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Accordion, Panel } from 'react-bootstrap';
import { connector, store } from '../../store/store';

const { string, func, object, shape } = PropTypes;

class TimeFilter extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
    this.handleClick = this.handleClick.bind(this);
  }
  renderTimes() {
    let times = ['Morning', 'Afternoon', 'Evening'];
    return times.map((time, index) => {
      return (
        <Panel key={index} onClick={this.handleClick}>
          <h3>{time}</h3>
        </Panel>
      );
    });
  }
  handleClick(event) {
    console.log('Event:', event.target.textContent);
    console.log('Props: ', this.props);
    let time = event.target.textContent;

    this.props.filterEventsAction(time, 'time', this.props);
    this.forceUpdate();
  }
  render() {
    return (
      <Accordion>
        {this.renderTimes()}
      </Accordion>
    );
  }
}

TimeFilter.propTypes = {
  genre: shape({
    name: string
  }),
  filterEventsAction: func
};

export default connector(TimeFilter);
