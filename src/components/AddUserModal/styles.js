import styled from 'styled-components';

export const Container = styled.View``;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  padding: 25px;
`;

export const ModalInner = styled.View`
  background: #fff;
  padding: 25px;
  border-radius: 5px;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: grey;
  text-align: center;
  margin-bottom: 25px;
  /* padding: 5px; */
`;

export const UserInput = styled.TextInput`
  background: #fff;
  width: 100%;
  height: 52px;
  border: 1px solid #ccc;
  padding: 0 25px;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  margin-bottom: 15px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 52px;
  border-radius: 5px;
  background: ${props => (props.color ? '#83e2a9' : '#ccc')};
  margin-right: ${props => (props.marginRight ? '15px' : '0')};
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 14px;
`;
