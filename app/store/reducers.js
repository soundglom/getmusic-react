import _ from 'lodash';
import { SEARCH } from '../actions/action_types';
import { events } from '!json!../../data';

// console.log(events)

const initialState = {
  searchEventsQuery: '',
  events: events,
  allEvents: events
}

export const searchEventsReducer = (state = initialState, action) => {
  // console.log('From game logic: ', action.type);
  switch (action.type) {
    case SEARCH:
      // console.log(action.value)
      let newEvents = Object.assign([], state.allEvents)
      // console.log('New events', newEvents)

      // console.log(`${newEvents[0].name.text} ${newEvents[0].description.text}`.indexOf(action.value))
        // console.log(action);

      

      let searchedEvents = newEvents.filter((event) => {
        // let queryTest = `${event.name.text}`.toUpperCase().indexOf(action.value.toUpperCase() >= 0)
        // console.log(event.name.text.indexOf(action.value))
        let queryTest = `${event.name.text} ${event.description.text}`.toUpperCase()
                      .indexOf(action.value.toUpperCase());
        console.log('Querytest', queryTest)

        if (queryTest >= 0 ) return event 
      })
      
      console.log('Searched events: ', searchedEvents)


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