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

const createTimes = (collection) => {
  return collection.map((event) => {
    let startTime = new Date(event.start.utc).getHours();

    if (startTime < 12) {
      timeFilters.morning.events.push(event);
    } else if (startTime > 12 && startTime < 18) {
      timeFilters.afterNoon.events.push(event);
    } else {
      timeFilters.evening.events.push(event);
    }
  });
};

export default createTimes;
