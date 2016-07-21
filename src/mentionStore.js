/* eslint new-cap: [2, {capIsNewExceptions: ["Map"]}] */
import { Map } from 'immutable';

let offset = Map();
const mentionStore = {
  offset: Map(),
  getOffset() {
    return offset;
  },
  activeSuggestion({ offsetKey }) {
    offset = offset.set(offsetKey, {
      offsetKey,
    });
  },
  inActiveSuggestion({ offsetKey }) {
    offset = offset.delete(offsetKey);
  },
  updateSuggestion({ offsetKey, position }) {
    offset = offset.set(offsetKey, {
      offsetKey,
      position,
    });
  },
};

// function storeAction(state = defaultState, action) {
//   switch (action.type) {
//     case ACTIVE_SUGGESTION:
//       state.offset = state.offset.set(action.offsetKey, {
//         offsetKey: action.offsetKey,
//       });
//       break;
//     case INACTIVE_SUGGESTION:
//       state.offset = state.offset.delete(action.offsetKey);
//       break;
//     case UPDATE_SUGGESTION:
//       state.offset = state.offset.set(action.offsetKey, {
//         offsetKey: action.offsetKey,
//         position: action.position,
//       });
//       break;
//     default: break;
//   }
//   return state;
// }

// export default createStore(storeAction);
export default mentionStore;
