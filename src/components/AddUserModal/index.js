import React, { Component } from 'react';
import { Modal, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as userModalActions } from '~/store/ducks/userModal';
import { Creators as userActions } from '~/store/ducks/users';

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

  handleOnPress = async () => {
    const { addUserRequest, hideModal, userModal } = this.props;
    const { userInput } = this.state;

    await addUserRequest(userInput, userModal.coordinates);
    this.setState({ userInput: '' });
  };

  render() {
    const { userModal, hideModal, loading } = this.props;
    const { userInput } = this.state;
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
              onChangeText={text => this.setState({ userInput: text })}
              value={userInput}
            />
            <ButtonContainer>
              <Button marginRight onPress={() => hideModal()}>
                <ButtonText>Cancelar</ButtonText>
              </Button>
              <Button color onPress={this.handleOnPress}>
                {loading ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <ButtonText>Salvar</ButtonText>
                )}
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
  loading: state.users.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...userModalActions, ...userActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddUserModal);
