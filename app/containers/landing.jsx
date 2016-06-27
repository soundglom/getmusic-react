import React, { Component } from 'react';
import TopBar from '../components/topbar';

export default class Landing extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='landing'>
        <TopBar />
        <h1 id='landing-text'>This is the landing page</h1>
      </div>
    );
  }
}
