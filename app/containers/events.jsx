import React, { Component } from 'react';
import TopBar from '../components/topbar';
import Event from '../components/event';
import { connector } from '../store/store'
import Data from '!json!../../data';

class Events extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    let p = this.props.search.events;
    console.log(p)
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