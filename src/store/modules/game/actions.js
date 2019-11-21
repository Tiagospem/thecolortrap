export function startGame(defaults) {
  return {
    type: '@game/START_GAME',
    payload: {defaults},
  };
}
