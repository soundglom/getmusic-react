import { INITIAL_STATE } from '../actions/action_types';

const initialReducer = (state = {}, action) => {
  switch (action.type) {
    case INITIAL_STATE:
    // console.log('Intial state: ', state);
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
