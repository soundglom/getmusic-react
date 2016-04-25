import React, { Component } from 'react';
import TopBar from '../components/topbar';
import Event from '../components/event';
import { connector } from '../store/store'
import Data from '!json!../../data';

class Events extends Component {
  constructor(props) {
    super(props);
  }
  searchEvents() {

  }
  render() {
    console.log('Props from events: ', this.props);
    let p = this.props.search.events;

    return (
      <div id="events-view">
        <TopBar />
        <div id="events-container">
          {p.map((event, index) => <Event {...event} key={index} />)}
        </div>
      </div>
    )
  }
}

export default connector(Events);