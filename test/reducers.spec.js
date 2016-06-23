import { expect } from 'chai';
import rootReducer from '../app/reducers';
import initialReducer from '../app/reducers/initial-reducer';
import fetchReducer from '../app/reducers/fetch-reducer';
import searchReducer from '../app/reducers/search-reducer';
import { searchEventsAction, initialStateAction } from '../app/actions'
import * as TYPES from '../app/actions/action-types';

describe('Reducers', () => {

  describe('rootReducer', function () {
    const initialState = {
      allEvents: [],
      searchedEvents: [],
      searchQuery: ''
    };
    
    xit('should return reduced values of each reducer', () => {
      const emptyRoot = { 
        initialReducer: {}, 
        fetchReducer: {}, 
        searchReducer: {} 
      };
      
      expect(rootReducer(undefined, {})).to.deep.equal(emptyRoot);
      
    });

    xit('should return this intital state', () => {

      
      expect(rootReducer({}, { type: TYPES.INITIAL_STATE })).to.deep.equal(initialState);

    });

  })

  describe('initialReducer', function () {
    const initialState = {
      allEvents: [],
      searchedEvents: [],
      searchQuery: ''
    };

    it('should return the initial state', () => {
      // console.log(initialState);
      // console.log('Root Reducer', rootReducer(undefined, {}));
      // console.log('Initial Reducer: ', initialReducer({}, { type: TYPES.INITIAL_STATE }));
      expect(initialReducer({}, { type: TYPES.INITIAL_STATE })).to.deep.equal(initialState);
    });

    it('should return an object', () => {
      expect(initialReducer({}, { type: TYPES.INITIAL_STATE })).to.be.a('object');
    });
  });

});
