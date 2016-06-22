import { FILTER_EVENTS } from '../actions/action_types';

const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case FILTER_EVENTS:
      // console.log('Searching!', action.payload)
      let newState = {...action.payload};

      let filteredEvents = newState.state.filter((event) => {
        debugger;
        let queryTest = `${event.description.text} ${event.genre}`.toUpperCase()
                      .indexOf(newState.query.toUpperCase());
        if (queryTest >= 0) return event;
      });

      return {
        events: searchedEvents,
        searchQuery: newState.query
      };
    default:
      return state;
  }
};

export default searchReducer;
