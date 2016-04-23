import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchEventsAction } from '../actions/actions';

import { connector } from '../reducers/store';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleEventSearch = this.handleEventSearch.bind(this);
  }
  handleEventSearch(event) {
    console.log('Props from search: ', this.props)
    this.props.searchEventsAction(event.target.value);
  }
  render() {
    return (
      <div className="top-bar-right">
        <ul className="menu">
          <li><input 
            value={this.props.setEventSearch}
            onChange={this.handleEventSearch} 
            type="search" 
            placeholder="Search" 
          /></li>
          <li><button type="button" className="button">Search</button></li>
        </ul>
      </div>
    )
  }
}

// Map properties and actions to Redux reducer
// function mapStateToProps(state) {
//   return {
//     search: state.searchEventsReducer
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ searchEventsAction }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Search);

export default connector(Search)