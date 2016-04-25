import { SEARCH } from '../actions/action_types';
const initialState = {
  eventSearch: '',
  // events
}

const searchEventsReducer = (state = initialState, action) => {
  // console.log('From game logic: ', action.type);
  switch (action.type) {
    case SEARCH_FOR_EVENTS:
      
      let newState = {
        ...state,
        searchEvents: action.value
      }
      
      return newState;
  }
  return state;
}

