import React, { Component } from 'react';
import TopBar from '../components/topbar';
import Events from './events';
import SideBar from './sidebar';

class ResultsView extends Component {
  render () {
    return (
      <div id='results-view'>
        <TopBar />
        <SideBar />
        <Events />
      </div>
    );
  }
}

export default ResultsView;
