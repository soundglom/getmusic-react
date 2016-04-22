import React, { Component } from 'react';
import TopBar from '../components/topbar';

export default class Landing extends Component {
  render() {
    return (
      <div id="landing">
        <TopBar />
        <div>
          <h2>Landing Page</h2>
          <p>Just testing for route implementation</p>
        </div>
      </div>
    )
  }
}