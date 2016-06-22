import React, { Component } from 'react';
import { connector } from '../store/store';
import Filter from '../components/filter';
import DropDown from './dropdown';

// import TopBar from '../components/topbar';

const filterProps = {
  name: 'Venue',
  active: 'venue',
  inactive: 'no venue'
};

class SideBarTwo extends Component {
  render() {
    return (
      <div id='side-bar' className='small-4 columns'>
        <DropDown />
      </div>
    );
  }
}

export default SideBarTwo;
