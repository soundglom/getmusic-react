import { FILTER_TIMES } from '../../actions/action-types';

const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case FILTER_TIMES:
      let newState = {...action.payload};
      let filteredEvents = [];

      let newTime = newState.filter.toLowerCase();
      let newObj = newState.state.filter.timeFilters[newTime];

      filteredEvents = newObj.events;

      return {
        events: filteredEvents,
        filters: newState.filter
      };
    default:
      return state;
  }
};

export default filterReducer;
