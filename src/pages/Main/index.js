import React from 'react';
import {Container} from './styles';
import {useSelector} from 'react-redux';

import StartScreen from '../Screens/Start';
import PlayScreen from '../Screens/Play';

export default function Main() {
  const gameState = useSelector(state => state.game.gameState);

  return (
    <Container>
      {gameState.playing && gameState.active ? <PlayScreen /> : <StartScreen />}
    </Container>
  );
}
