import React, { Component } from 'react';

import { connector } from '../store/store';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleEventSearch = this.handleEventSearch.bind(this);
  }
  handleEventSearch(event) {
    event.preventDefault();
    let searchForm = document.getElementById('event-search');
    console.log('Search form value: ', searchForm.value)
    console.log('Props from search: ', this.props)
    this.props.searchEventsAction(searchForm.value);
    searchForm.value = '';
  }
  render() {
    return (
      <div className="top-bar-right">
        <form onSubmit={this.handleEventSearch}>
          <ul className="menu">
            <li><input 
              id="event-search"
              value={this.props.setEventSearch}
               
              type="search" 
              placeholder="Search" 
            /></li>
            <li><button type="submit" className="button">Search</button></li>
          </ul>
        </form>
      </div>
    )
  }
}

export default connector(Search)