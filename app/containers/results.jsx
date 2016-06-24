import React, { Component, PropTypes } from 'react';
import { connector } from '../store/store';
import TopBar from '../components/topbar';
import SideBar from './sidebar';
import SideBarTwo from './sidebar2';
import Events from './events';

const { func } = PropTypes;

class ResultsView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='results-view'>
        <TopBar />
        <SideBarTwo />
        <Events />
      </div>
    );
  }
}

ResultsView.propTypes = {
  fetchEventsAction: func
};

export default connector(ResultsView);
