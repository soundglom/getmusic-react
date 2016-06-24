import { combineReducers } from 'redux';
import initialReducer from './initial-reducer';
import fetchReducer from './fetch-reducer';
import searchReducer from './search-reducer';
import filterReducer from './filter-reducer';
import genreFilterReducer from './filter-reducers/genre-filter-reducer';
import timeFilterReducer from './filter-reducers/time-filter-reducer';

const initialState = {
  allEvents: [],
  renderedEvents: []
};

const allEvents = (state = []) => state;
const renderedEvents = (state = []) => state;
const rootReducer = combineReducers({
  initialReducer,
  fetchReducer,
  searchReducer,
  // filterReducer,
  genreFilterReducer,
  timeFilterReducer
});

export default rootReducer;
