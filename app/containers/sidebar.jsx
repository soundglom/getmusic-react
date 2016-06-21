import React, { Component } from 'react';
import { connector } from '../store/store';
// import TopBar from '../components/topbar';

class SideBar extends Component {
  render () {
    return (
      <div id='side-bar' className='small-3 columns'>
      </div>
    );
  }
}

export default connector(SideBar);
