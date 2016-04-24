import { SEARCH } from '../actions/action_types';
import { events } from '!json!../../data';

// console.log(events)

const initialState = {
  searchEventsQuery: '',
  events
}

export const searchEventsReducer = (state = initialState, action) => {
  // console.log('From game logic: ', action.type);
  switch (action.type) {
    case SEARCH:
      
      let newState = {
        ...state,
        searchEventsQuery: action.value
      }
      
      return newState;
  }
  return state;
}

export const getEventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case EVENTS:
  }
}