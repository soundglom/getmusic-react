import { FILTER_EVENTS } from '../actions/action-types';

const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case FILTER_EVENTS:
      let newState = {...action.payload};
      let filteredEvents = [];

      if (newState.prop === 'time') {
        let newTime = newState.filter.toLowerCase();
        let newObj = newState.state.filter.timeFilters[newTime];

        filteredEvents = newObj.events;
      } else {
        filteredEvents = newState.state.allEvents.filter((event, i, l) => {
          let filterTest = `${event[newState.prop]}`.toUpperCase()
                            .indexOf(newState.filter.toUpperCase());

          if (filterTest >= 0) {
            newState.state.myEvents.push(event);
            return event;
          }
        });
      }

      return {
        events: filteredEvents,
        filters: newState.filter
      };
    default:
      return state;
  }
};

export default filterReducer;
