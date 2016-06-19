import { SEARCH_EVENTS, INITIAL_STATE } from './action_types';

export const searchEventsAction = (query, state) => {
  return { type: SEARCH_EVENTS, payload: { query } };
};

export const intialStateAction = (query, state) => {
  return { type: INITIAL_STATE };
};
