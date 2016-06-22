import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import * as actions from '../actions';
import rootReducer from '../reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

// Redux props and action connectors
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    allEvents: state.fetchReducer.allEvents,
    myEvents: [],
    search: {
      searchQuery: state.searchReducer.query,
      events: state.searchReducer.events
    },
    filter: {
      enabled: state.filterReducer.filters,
      events: state.filterReducer.events
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch)
  return bindActionCreators(actions, dispatch);
};

const connector = connect(mapStateToProps, mapDispatchToProps);

module.exports = { connector, rootReducer, store };
