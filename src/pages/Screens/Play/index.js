import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import {
  Container,
  ConfirmButton,
  ConfirmButtonText,
  Trap1,
  Trap2,
} from './styles';
import {setState} from 'expect/build/jestMatchersObject';

export default function Start() {
  let interval;

  const colors = [
    '#ff3',
    '#f55',
    '#f15',
    '#f8d',
    '#f97',
    '#f9b',
    '#f99',
    '#ff8',
    '#ff9',
    '#f66',
  ];

  const gameState = useSelector(state => state.game.gameState);

  const [trapColor1, setTrapColor1] = useState('#000');
  const [trapColor2, setTrapColor2] = useState('#000');

  const [selectedColor1, setSelectedColor1] = useState(0);
  const [selectedColor2, setSelectedColor2] = useState(0);

  function getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  const loop = function loop() {
    const color1 = getRandomNumber();
    const color2 = getRandomNumber();

    setTrapColor1(colors[color1]);
    setTrapColor2(colors[color2]);

    setSelectedColor1(color1);
    setSelectedColor2(color2);

    console.tron.log('loop', gameState.speed);
  };

  function handleStop() {
    console.tron.log('game stopped');
    clearInterval(interval);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    interval = setInterval(loop, gameState.speed);
  }, []);

  return (
    <Container>
      <Text>Best: 0</Text>
      <Text>Score: 0</Text>

      <Trap1 background={trapColor1} />
      <Trap2 background={trapColor2} />

      <ConfirmButton>
        <ConfirmButtonText>Confirm</ConfirmButtonText>
      </ConfirmButton>
      <ConfirmButton onPress={() => handleStop()}>
        <ConfirmButtonText>stoptest</ConfirmButtonText>
      </ConfirmButton>
    </Container>
  );
}
