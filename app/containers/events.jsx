/*eslint no-useless-constructor: 0*/
import React, { Component } from 'react';
import TopBar from '../components/topbar';
import Event from '../components/event';
import { connector } from '../store/store';
// import Data from '!json!../../data';

class Events extends Component {
  constructor (props) {
    super(props);
  }
  renderEvents () {
    // console.log(this.props);
    let p = this.props;
    const test = () => {
      // if (!p.search.events) {
      //   return p.allEvents;
      // } else if (!p.myEvents) {
      //   return p.allEvents;
      // }
      // if (p.filter.events) {
      //   return p.filter.events;
      // } else if (p.search.events) {
      //   return p.search.events;
      // }
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
