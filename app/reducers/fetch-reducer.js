import { FETCH_EVENTS } from '../actions/action-types';

const fetchReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      let payload = action.payload;
      let timeFilters = {
        morning: {
          label: 'Morning',
          events: []
        },
        afterNoon: {
          label: 'Afternoon',
          events: []
        },
        evening: {
          label: 'Evening',
          events: []
        }
      };

      payload.data.forEach((event) => {
        let startTime = new Date(event.start.utc).getHours();
        if (startTime < 12) {
          timeFilters.morning.events.push(event);
        } else if (startTime > 12 && startTime < 18) {
          timeFilters.afterNoon.events.push(event);
        } else {
          timeFilters.evening.events.push(event);
        }
      });

      console.log(timeFilters);

      return {
        allEvents: payload.data,
        timeFilters
      };
    default:
      return state;
  }
};

export default fetchReducer;
