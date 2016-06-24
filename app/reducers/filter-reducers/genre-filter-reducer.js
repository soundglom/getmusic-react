import { FILTER_GENRES } from '../../actions/action-types';

const genreFilterReducer = (state = {}, action) => {
  switch (action.type) {
    case FILTER_GENRES:
      let newState = {...action.payload};
      console.log('App State: ', state);
      console.log('Payload: ', action.payload);

      let filteredEvents = newState.state.allEvents.filter((event, i, l) => {
        let filterTest = `${event[newState.prop]}`.toUpperCase()
                          .indexOf(newState.filter.toUpperCase());

        if (filterTest >= 0) {
          newState.state.myEvents.push(event);
          return event;
        }
      });

      return {
        events: filteredEvents,
        filters: newState.filter
      };
    default:
      return state;
  }
};

export default genreFilterReducer;
