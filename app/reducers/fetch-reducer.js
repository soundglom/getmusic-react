import { FETCH_EVENTS } from '../actions/action-types';
import createTimes from './libs/time-data';
import createGenres from './libs/genre-data';

const fetchReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_EVENTS:

      let newState = {...action.payload.state};
      let events = [...action.payload.res.data];

      newState.allEvents = [...events];
      newState.filteredEvents = [];
      newState.timeFilters = createTimes(events);
      newState.genreFilters = createGenres(events);
      newState.currentFilters = {};

      return newState;
    default:
      return state;
  }
};

export default fetchReducer;
