import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const StartView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StartButton = styled(RectButton)`
  width: 260px;
  height: 60px;
  background: #7159c1;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
