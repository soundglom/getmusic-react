import { SEARCH_EVENTS } from './action_types';

export const searchEventsAction = (query, state) => {
  return { type: SEARCH_EVENTS, payload: { query } };
};
