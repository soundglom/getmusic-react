import React, { Component } from 'react';
import TopBar from '../components/topbar';
import SideBar from './sidebar';
import SideBarTwo from './sidebar2';
import Events from './events';

class ResultsView extends Component {
  render () {
    return (
      <div id='results-view'>
        <TopBar />
        <SideBarTwo />
        <Events />
      </div>
    );
  }
}

export default ResultsView;
