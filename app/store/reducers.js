import _ from 'lodash';
import { SEARCH } from '../actions/action_types';
import { events } from '!json!../../data';

const initialState = {
  searchEventsQuery: '',
  events: events,
  allEvents: events
}

export const searchEventsReducer = (state = initialState, action) => {
  // console.log('From game logic: ', action.type);
  switch (action.type) {
    case SEARCH:
      console.log('This works!')
      let newEvents = Object.assign([], state.allEvents)
 
      let searchedEvents = newEvents.filter((event) => {
        let queryTest = `${event.name.text} ${event.description.text}`.toUpperCase()
                      .indexOf(action.value.toUpperCase());
        if (queryTest >= 0 ) return event 
      })      

      let newState = {
        allEvents: newEvents,
        searchEventsQuery: action.value
      }

      newState.events = newState.searchEventsQuery ? searchedEvents : newEvents;
      
      return newState;
  }
  return state;
}

export const getEventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case EVENTS:
  }
}