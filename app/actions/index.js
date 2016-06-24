import axios from 'axios';
import {
  INITIAL_STATE,
  FETCH_EVENTS,
  SEARCH_EVENTS,
  FILTER_EVENTS,
  FILTER_TIMES,
  FILTER_GENRES
} from './action-types';

export const initialStateAction = (state) => {
  return { type: INITIAL_STATE };
};

export const searchEventsAction = (query, state) => {
  return { type: SEARCH_EVENTS, payload: { query, state } };
};

export const filterTimesAction = (filter, prop, state) => {
  return { type: FILTER_TIMES, payload: { filter, prop, state } };
};

export const filterGenresAction = (filter, prop, state) => {
  return { type: FILTER_GENRES, payload: { filter, prop, state } };
};

export const filterEventsAction = (filter, prop, state) => {
  return { type: FILTER_EVENTS, payload: { filter, prop, state } };
};

export const fetchEventsAction = (state) => {
  let fetch = axios.get('/api/data');

  return (dispatch) => {
    fetch.then((res) => {
      dispatch({ type: FETCH_EVENTS, payload: { res, state } });
    });
  };
};
