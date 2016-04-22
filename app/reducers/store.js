import redux, { combineReducers } from 'redux';
import { connect } from 'react-redux';

import searchEvents from './search_reducer';

// import Data from '!json!../../data';

const events = Data.events;

const initialState = {
  eventSearch: '',
  // events
}

const rootReducer = combineReducers({
  searchEvents
})

// Redux props and action connectors
const mapStateToProps = (state) => {
  return {
    eventSearch: state.searchEvents,
    // events: state.events
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setEventSearch: (query) => {
      dispatch({type: SET_EVENT_SEARCH, value: query})
    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, rootReducer }