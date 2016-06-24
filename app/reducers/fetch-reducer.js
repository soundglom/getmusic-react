import { FETCH_EVENTS } from '../actions/action-types';
import createTimes from './libs/time-data';
import createGenres from './libs/genre-data';

const fetchReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      let events = [...action.payload.data];

      return {
        allEvents: {...events},
        renderedEvents: [...events],
        genreFilters: createGenres(events),
        timeFilters: createTimes(events)
      };
    default:
      return state;
  }
};

export default fetchReducer;
