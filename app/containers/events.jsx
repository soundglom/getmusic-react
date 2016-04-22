import React, { Component } from 'react';
import TopBar from '../components/topbar';
import Event from '../components/event';

export default class Landing extends Component {
  render() {
    return (
      <div id="">
        <TopBar />
        <Event />
      </div>
    )
  }
}