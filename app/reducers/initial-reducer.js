import { INITIAL_STATE } from '../actions/action-types';

const initialReducer = (state = {}, action) => {
  switch (action.type) {
    case INITIAL_STATE:
      console.log('State');
      let newState = {
        allEvents: [],
        searchedEvents: [],
        searchQuery: ''
      };
      return newState;
    default:
      return state;
  }
};

export default initialReducer;
