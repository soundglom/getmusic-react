import React, { Component } from 'react';
import { connector } from '../store/store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import DropDown from './dropdown';
import Filter from '../components/filter';

// import theme from './PurpleDrawer.scss';
// import TopBar from '../components/topbar';

const filterProps = {
  name: 'Venue',
  active: 'venue',
  inactive: 'no venue'
};

class SideBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle () {
    console.log('this works');
    this.setState({open: !this.state.open});
  }
  render () {
    return (
      <div>
        <RaisedButton
          label='Toggle Drawer'
          onClick={this.handleToggle}
        />
        <Drawer open={this.state.open}>
          <MenuItem onClick={this.handleToggle}>Close</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
          <DropDown />
        </Drawer>
      </div>
    );
  }
}

export default SideBar;
