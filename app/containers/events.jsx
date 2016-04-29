import React, { Component } from 'react';
import TopBar from '../components/topbar';
import Event from '../components/event';
import { connector } from '../store/store'
// import Data from '!json!../../data';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }    
  }
  renderEvents(event, index) {
      return <Event {...event} key={index} />
    
  }
  render() {

    return (
      <div id="events-view">
        <TopBar />
        <div id="events-container">
          {this.props.search.events.map(this.renderEvents)}
        </div>
      </div>
    )
  }
}

export default connector(Events);