import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <div className="top-bar-right">
        <ul className="menu">
          <li><input type="search" placeholder="Search" /></li>
          <li><button type="button" className="button">Search</button></li>
        </ul>
      </div>
    )
  }
}