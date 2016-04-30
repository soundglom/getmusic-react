import redux, { combineReducers, createStore, applyMiddleware, bindActionCreators } from 'redux';
import reactRedux, { connect } from 'react-redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import { SEARCH, FETCH_EVENTS, EVENTS_READY } from '../actions/action_types';
import * as actions from '../actions'
import rootReducer from './reducers';

// const store = applyMiddleware(ReduxPromise)(createStore)(rootReducer);
const store = createStore(rootReducer, applyMiddleware(thunk));

console.log(store)
// Redux props and action connectors
const mapStateToProps = (state) => {
  return {
    allEvents: state.fetchReducer.allEvents,
    search: {
      searchQuery: state.searchReducer.query,
      events: state.searchReducer.events
    }
  }
}




const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch)
  return bindActionCreators(actions, dispatch);
}



const connector = connect(mapStateToProps, mapDispatchToProps);

module.exports = { connector, rootReducer, store }

