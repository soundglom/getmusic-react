import React, { Component } from 'react';
import Search from './search';

export default class TopBar extends Component {
  render() {
    return (
      <div className="top-bar" id="example-menu">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">Site Title</li>            
            <li><a href="#">Two</a></li>
            <li><a href="#">Three</a></li>
          </ul>
        </div>
        <Search />
      </div>
    )
  }
}