import redux, { combineReducers, createStore, applyMiddleware } from 'redux';
import reactRedux, { connect } from 'react-redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import { SEARCH, FETCH_EVENTS, EVENTS_READY } from '../actions/action_types';
import { searchEventsReducer, getEventsReducer, initialState, renderEventsReducer } from './reducers';

const rootReducer = combineReducers({
  searchEventsReducer,
  getEventsReducer
});

// const store = applyMiddleware(ReduxPromise)(createStore)(rootReducer);
const store = createStore(rootReducer, applyMiddleware(thunk));

const fetchEvents = () => {
  const request = axios.get(url)
  console.dir(request)
  return (dispatch) => {
    request.then(data => {
      store.dispatch({ type: FETCH_EVENTS, payload: data.events })
      console.log('fetched')
    })   
  }
}

// Redux props and action connectors
const mapStateToProps = (state) => {
  // console.log(state)
  return {
    search: state.searchEventsReducer,
    events: state.renderEventsReducer
    // events: state.events
  }
}


const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch)
  return {
    searchEventsAction: (query) => {
      dispatch({ type: SEARCH, payload: query })
    },
    // fetchEvents: fetchEvents
    fetchEvents: () => {
      const request = axios.get(url);
      dispatch({ type: FETCH_EVENTS, payload: request })
    }
  }
}



const connector = connect(mapStateToProps, mapDispatchToProps);

module.exports = { connector, rootReducer, store, url }

