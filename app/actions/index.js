import axios from 'axios';
import {
  INITIAL_STATE,
  FETCH_EVENTS,
  SEARCH_EVENTS,
  FILTER_EVENTS
} from './action-types';

export const intialStateAction = (state) => {
  return { type: INITIAL_STATE, payload: state };
};

export const searchEventsAction = (query, state) => {
  return { type: SEARCH_EVENTS, payload: { query, state } };
};

export const filterEventsAction = (filter, prop, state) => {
  return { type: FILTER_EVENTS, payload: { filter, prop, state } };
};

export const fetchEventsAction = () => {
  let fetch = axios.get('/api/data');

  return (dispatch) => {
    fetch.then((res) => {
      dispatch({ type: FETCH_EVENTS, payload: res });
    });
  };
};
