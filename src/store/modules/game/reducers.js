import produce from 'immer';

const INITIAL_STATE = {
  defaults: {
    points: 0,
    active: false,
    playing: false,
    speed: 1000,
  },
  gameData: {},
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/START_GAME': {
        draft.gameData = action.payload.defaults;
        break;
      }
      case '@user/END_GAME': {
        draft.gameData = {};
        break;
      }
      default:
    }
  });
}
