import _ from 'lodash';
import { SEARCH, FETCH_EVENTS } from '../actions/action_types';
import axios from 'axios';
import { events } from '../../data';

const initialState = {
  searchEventsQuery: '',
  events: [],
  allEvents: [],
  present: false
}

export const searchEventsReducer = (state = initialState, action) => {
  console.log('From game logic: ', action.type);
  switch (action.type) {
    case SEARCH:
      let newEvents = Object.assign([], state.allEvents)
 
      let searchedEvents = newEvents.filter((event) => {
        let queryTest = `${event.name.text} ${event.description.text}`.toUpperCase()
                      .indexOf(action.payload.toUpperCase());
        if (queryTest >= 0 ) return event 
      })      

      let newState = {
        allEvents: newEvents,
        searchEventsQuery: action.payload
      }

      newState.events = newState.searchEventsQuery ? searchedEvents : newEvents;
      
      return newState;
    default:
      return state;
  }
}

export const getEventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      const newState = {...state}
      console.log('got events', action.payload)
      action.payload.data.forEach((event) => {
        newState.events.push(event)
        newState.allEvents.push(event)
      })
      newState.present = true

      return state;
    default: 
      return state;
  }
}
