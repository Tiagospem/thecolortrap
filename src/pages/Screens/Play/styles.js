import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Trap1 = styled.View`
  flex: 1;
  background: ${props => props.background};
`;
export const Trap2 = styled.View`
  flex: 1;
  background: ${props => props.background};
`;

export const ConfirmButton = styled(RectButton)`
  height: 50px;
  width: 250px;
  align-items: center;
  justify-content: center;
  background: #7159c1;
  border-radius: 10px;
`;

export const ConfirmButtonText = styled.Text`
  color: #fff;
`;
