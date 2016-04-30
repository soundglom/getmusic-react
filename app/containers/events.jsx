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
  renderEvents() {
    console.log(this.props)
    let p = this.props;
    const test = () => {
      if (!p.search.events) {
        return p.allEvents;
      }
      return p.search.events;
    }

    return test().map((event, index) => {
      return <Event {...event} key={index} />      
    })
    
  }
  render() {
    // console.log(this.props)
    return (
      <div id="events-view">
        <TopBar />
        <div id="events-container">
          {this.renderEvents()}
        </div>
      </div>
    )
  }
}

export default connector(Events);