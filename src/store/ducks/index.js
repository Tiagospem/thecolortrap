import {combineReducers} from 'redux';

import game from '~/store/modules/game/reducers';

const reducers = combineReducers({
  game,
});

export default reducers;
