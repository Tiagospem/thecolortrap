import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StartView, StartButton, ButtonText} from './styles';

import {startGame} from '~/store/modules/game/actions';

export default function Start() {
  const dispatch = useDispatch();
  const defaults = useSelector(state => state.game.defaults);

  function handleStartGame() {
    dispatch(
      startGame({
        ...defaults,
        active: true,
        playing: true,
      }),
    );
  }

  return (
    <StartView>
      <StartButton>
        <ButtonText onPress={() => handleStartGame}>Start Game</ButtonText>
      </StartButton>
    </StartView>
  );
}
