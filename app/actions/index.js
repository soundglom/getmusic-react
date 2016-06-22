import { INITIAL_STATE, SEARCH_EVENTS, FILTER_EVENTS } from './action_types';

export const intialStateAction = (state) => {
  return { type: INITIAL_STATE, payload: state };
};

export const searchEventsAction = (query, state) => {
  return { type: SEARCH_EVENTS, payload: { query, state } };
};

export const filterEventsAction = (genre, state) => {
  return { type: FILTER_EVENTS, payload: { genre, state } };
};

