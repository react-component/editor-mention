/* eslint new-cap: [2, {capIsNewExceptions: ["Map"]}] */
import { createStore } from 'redux';
import { Map } from 'immutable';
import { ACTIVE_SUGGESTION, INACTIVE_SUGGESTION, UPDATE_SUGGESTION } from './actions';

const defaultState = {
  offset: Map(),
};

function storeAction(state = defaultState, action) {
  switch (action.type) {
    case ACTIVE_SUGGESTION:
      state.offset = state.offset.set(action.offsetKey, {
        offsetKey: action.offsetKey,
      });
      break;
    case INACTIVE_SUGGESTION:
      state.offset = state.offset.delete(action.offsetKey);
      break;
    case UPDATE_SUGGESTION:
      state.offset = state.offset.set(action.offsetKey, {
        offsetKey: action.offsetKey,
        position: action.position,
      });
      break;
    default: break;
  }
  return state;
}

export default createStore(storeAction);
