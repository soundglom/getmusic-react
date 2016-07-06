import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
// import $ from 'jquery';
// import foundation from 'foundation-sites';
import Search from '../components/search';
import { connector } from '../store/store';
import logo from './white.png';

const { func } = PropTypes;

class TopBar extends Component {
  constructor (props) {
    super(props);
  }
  componentWillMount() {
    this.props.fetchEventsAction(this.props);
  }
  render () {
    return (
      <div className='top-bar' id='example-menu'>
        <div className='top-bar-left'>
          <ul className='dropdown menu' data-dropdown-menu>
            <li className='menu-text top-bar-title'><img src='/logo5.png' /></li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/results' >All Events</Link></li>
            <li><a data-toggle='offCanvas'>Open Menu</a></li>
          </ul>
        </div>
        <Search />
      </div>
    );
  }
}

TopBar.propTypes = {
  fetchEventsAction: func,
  initialStateAction: func
};

export default connector(TopBar);
