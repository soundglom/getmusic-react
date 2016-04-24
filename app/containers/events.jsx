import React, { Component } from 'react';
import TopBar from '../components/topbar';
import Event from '../components/event';
import Data from '!json!../../data';

export default class Events extends Component {
  render() {
    return (
      <div id="events-view">
        <TopBar />
        <div id="events-container">
          {Data.events.map((event, index) => <Event {...event} key={index} />)}
        </div>
      </div>
    )
  }
}