const { expect } = require('chai');
const { searchEventsAction } = require('../app/actions');
const TYPES = require('../app/actions/action_types');

// ----------------------------------------
// import { expect } from 'chai';
// import * as actions from '../../actions/TodoActions'
// import * as types from '../../constants/ActionTypes'
// ----------------------------------------

describe('Action Creators', () => {
  describe('searchEventsAction', () => {
    it('should be a function', () => {
      expect(searchEventsAction).to.be.a('function');
    });

    it('should return an object', () => {
      const query = 'T'
      const expectedAction = {
        type: TYPES.SEARCH_EVENTS,
        payload: { query }
      };

      expect(searchEventsAction(query)).to.be.a('object');
    });

    it('should create a search query action', () => {
      const query = 'T'
      const expectedAction = {
        type: TYPES.SEARCH_EVENTS,
        payload: { query }
      };

      expect(searchEventsAction(query)).to.deep.equal(expectedAction);
    });

    it(`should have a type of ${TYPES.SEARCH_EVENTS}`, () => {
      const query = 'T'
      const expectedAction = {
        type: TYPES.SEARCH_EVENTS,
        payload: { query }
      };

      expect(searchEventsAction(query).type).to.equal(TYPES.SEARCH_EVENTS)
    });
  });
})
