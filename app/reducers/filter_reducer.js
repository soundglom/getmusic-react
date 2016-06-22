import { FILTER_EVENTS } from '../actions/action_types';

const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case FILTER_EVENTS:
      console.log(action.payload);
      // console.log('Searching!', action.payload)
      let newState = {...action.payload};

      let filteredEvents = newState.state.allEvents.filter((event) => {
        console.log(event.genre);
        let genreTest = `${event.genre}`.toUpperCase()
                      .indexOf(newState.genre.toUpperCase());
        if (genreTest >= 0) return event;
      });

      console.log({filteredEvents, genre: newState.genre});
      return {
        events: filteredEvents,
        filter: newState.genre
      };
    default:
      return state;
  }
};

export default filterReducer;
