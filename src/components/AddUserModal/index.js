import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity } from 'react-native';

import {
  Container,
  ModalContainer,
  ModalInner,
  Title,
  UserInput,
  ButtonContainer,
  Button,
  ButtonText,
  colors,
} from './styles';

export default class AddUserModal extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <Container>
        <Modal
          animationType="slide"
          transparent
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible(false)}
        >
          <ModalContainer>
            <ModalInner>
              <Title>Adicionar novo Local</Title>
              <UserInput
                placeholder="Usuário no GitHub"
                autoCapitalize="none"
                autoComplete="none"
                onChangeText={() => {}}
              />
              <ButtonContainer>
                <Button
                  marginRight
                  onPress={() => {
                    this.setModalVisible(false);
                  }}
                >
                  <ButtonText>Cancelar</ButtonText>
                </Button>
                <Button color onPress={() => {}}>
                  <ButtonText>Salvar</ButtonText>
                </Button>
              </ButtonContainer>
            </ModalInner>
          </ModalContainer>
        </Modal>
        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Show Modal</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}
