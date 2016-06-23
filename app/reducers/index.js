import { combineReducers } from 'redux';
import initialReducer from './initial-reducer';
import fetchReducer from './fetch-reducer';
import searchReducer from './search-reducer';
import filterReducer from './filter-reducer';

const rootReducer = combineReducers({
  initialReducer,
  fetchReducer,
  searchReducer,
  filterReducer
});

export default rootReducer;
