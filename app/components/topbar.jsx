import React, { Component } from 'react';
import { Link } from 'react-router';
import Search from './search';

export default class TopBar extends Component {
  render() {
    return (
      <div className="top-bar" id="example-menu">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">Site Title</li>            
            
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">All Events</Link></li>
          </ul>
        </div>
        <Search />
      </div>
    )
  }
}