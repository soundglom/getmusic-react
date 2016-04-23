import { SEARCH } from './action_types';

export const searchEventsAction = (query) => {
  return {
    type: SEARCH,
    value: query
  };
};