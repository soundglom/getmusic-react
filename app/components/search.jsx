import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connector } from '../store/store';

export class Search extends Component {
  constructor (props) {
    super(props);
    this.handleEventSearch = this.handleEventSearch.bind(this);
  }
  handleEventSearch (event) {
    event.preventDefault();
    let p = this.props;
    let searchForm = document.getElementById('event-search');
    // console.log('Search form value: ', searchForm.value)
    console.log('Props from search: ', this.props);
    p.searchEventsAction(searchForm.value, p.allEvents);
    searchForm.value = '';
    browserHistory.push('/results');
  }
  render () {
    return (
      <div className='top-bar-right'>
        <form onSubmit={this.handleEventSearch}>
          <ul className='menu'>
            <li><input
              id='event-search'
              type='search'
              placeholder='Search'
            /></li>
            <li><button type='submit' className='button'>Search</button></li>
          </ul>
        </form>
      </div>
    );
  }
}

export default connector(Search);
