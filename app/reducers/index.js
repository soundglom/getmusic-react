import { combineReducers } from 'redux';
import initialReducer from './initial_reducer';
import fetchReducer from './fetch_reducer';
import searchReducer from './search_reducer';
import filterReducer from './filter_reducer';

const rootReducer = combineReducers({
  initialReducer,
  fetchReducer,
  searchReducer,
  filterReducer
});

export default rootReducer;
