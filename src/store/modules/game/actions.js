export function startGame(defaults) {
  return {
    type: '@main/START_GAME',
    payload: {defaults},
  };
}
