import produce from 'immer';

const INITIAL_STATE = {
  defaults: {
    points: 0,
    active: false,
    playing: false,
    speed: 1000,
  },
  gameState: {},
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@game/START_GAME': {
        draft.gameState = action.payload.defaults;
        break;
      }
      case '@game/END_GAME': {
        draft.gameState = {};
        break;
      }
      default:
    }
  });
}
