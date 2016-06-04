import { FETCH_EVENTS } from '../actions/action_types';

const fetchReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      // console.log(action.type);
      let payload = action.payload;

      return {
        searchQuery: '',
        allEvents: payload.data,
        searchedEvents: payload.data
      };

    default:
      return state;
  }
};

export default fetchReducer;
