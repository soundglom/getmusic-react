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
        <Panel
          key={index}
          className='filter'
          header={time}
          onClick={this.handleClick}
        />
      );
    });
  }
  handleClick(event) {
    let time = event.target.textContent;

    this.props.filterTimesAction(time, 'time', this.props);
    this.forceUpdate();
  }
  render() {
    return (
      <Accordion children={this.renderTimes()} />
    );
  }
}

TimeFilter.propTypes = {
  genre: shape({
    name: string
  }),
  filterTimesAction: func
};

export default connector(TimeFilter);
