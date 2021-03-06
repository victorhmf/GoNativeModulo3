import React, { Component } from 'react';
import { Modal, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as userModalActions } from '~/store/ducks/userModal';
import { Creators as userActions } from '~/store/ducks/users';
import PropTypes from 'prop-types';

import {
  ModalContainer,
  ModalInner,
  Title,
  UserInput,
  ButtonContainer,
  Button,
  ButtonText,
  Error,
} from './styles';

class AddUserModal extends Component {
  static propTypes = {
    addUserRequest: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired,
    userModal: PropTypes.shape({
      visible: PropTypes.bool,
      coordinates: PropTypes.array,
    }).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.string]).isRequired,
  };

  state = {
    userInput: '',
  };

  handleOnPress = async () => {
    const { addUserRequest, userModal } = this.props;
    const { userInput } = this.state;

    await addUserRequest(userInput, userModal.coordinates);
    this.setState({ userInput: '' });
  };

  render() {
    const {
      userModal, hideModal, loading, error,
    } = this.props;
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
            {!!error && <Error>{error}</Error>}
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
  error: state.users.error,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ ...userModalActions, ...userActions }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddUserModal);
