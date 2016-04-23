import redux, { combineReducers, createStore } from 'redux';
import reactRedux, { connect } from 'react-redux';
// import { SEARCH } from '../actions/actions_types';

const SEARCH = 'SEARCH_FOR_EVENTS';

const initialState = {
  search: ''
}
// Reducers
const searchEventsReducer = (state = initialState, action) => {
  console.log('From game logic: ', action.type);
  switch (action.type) {
    case SEARCH:
      
      let newState = {
        ...state,
        searchEvents: action.value
      }
      
      return newState;
  }
  return state;
}

const rootReducer = combineReducers({
  searchEventsReducer
})

const store = createStore(rootReducer);
// const store = createStore(s);




// Redux props and action connectors
const mapStateToProps = (state) => {
  console.log(state)
  return {
    search: state.searchEventsReducer,
    // events: state.events
  }
}

const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch)
  return {
    searchEventsAction: (query) => {
      dispatch({type: SEARCH, value: query})
    }
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps);

module.exports = { connector, rootReducer, store }

