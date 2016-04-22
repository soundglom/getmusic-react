
const SET_SEARCH_TERM = 'setSearchTerm';

export default (state = null, action) => {
  console.log('From game logic: ', action.type);
  switch (action.type) {
    case SET_EVENT_SEARCH:
      
      let newState = {
        ...state,
        searchEvents: action.value
      }
      
      return newState;
    default:
      return state;
  }
}