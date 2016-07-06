import React, { Component } from 'react';
import TopBar from './topbar';
import Event from '../components/event';
import { connector } from '../store/store';

class Events extends Component {
  constructor (props) {
    super(props);
  }
  renderEvents () {
    let p = this.props;
    const test = () => {
      if (!p.filteredEvents.length) {
        return p.allEvents;
      }

      return p.filteredEvents;
    };

    return test().map((event, index) => {
      return <Event {...event} key={index} />;
    });
  }
  render () {
    return (
      <div className='small-8 columns' id='events-view'>
        <div id='events-container'>
          {this.renderEvents()}
        </div>
      </div>
    );
  }
}

export default connector(Events);
