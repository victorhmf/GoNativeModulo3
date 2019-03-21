import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
`;

export const AnnotationContainer = styled.View`
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50;
`;

export const AnnotationFill = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50;
`;

export const CallOutContainer = styled.View`
  width: 200px;
  margin: 10px;
  align-items: center;
  padding: 0;
  justify-content: center;
`;

export const CallOutInner = styled.View`
  background: white;
  border-radius: 5px;
  width: 100%;
  justify-content: center;
  padding: 15px;
`;

export const UserName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const UserBio = styled.Text`
  font-size: 13px;
`;

export const Tip = styled.View`
  width: 0;
  height: 0;
  border-left-width: 15px;
  border-right-width: 15px;
  border-top-width: 15px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: white;
  margin-top: -1px;
`;
