import React, { Component } from 'react';
import { Modal } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as userModalActions } from '~/store/ducks/userModal';

import {
  ModalContainer,
  ModalInner,
  Title,
  UserInput,
  ButtonContainer,
  Button,
  ButtonText,
} from './styles';

class AddUserModal extends Component {
  state = {
    userInput: '',
  };

  render() {
    const { userModal, hideModal } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent
        visible={userModal.visible}
        onRequestClose={() => hideModal()}
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
              <Button marginRight onPress={() => hideModal()}>
                <ButtonText>Cancelar</ButtonText>
              </Button>
              <Button color onPress={() => {}}>
                <ButtonText>Salvar</ButtonText>
              </Button>
            </ButtonContainer>
          </ModalInner>
        </ModalContainer>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  userModal: state.userModal,
});

const mapDispatchToProps = dispatch => bindActionCreators(userModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddUserModal);
