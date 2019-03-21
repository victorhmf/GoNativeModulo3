import { call, put, select } from 'redux-saga/effects';
import api from '~/services/api';
import { Creators as UserActions } from '~/store/ducks/users';
import { Creators as UserModalActions } from '~/store/ducks/userModal';

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.username}`);

    const isDuplicated = yield select(state => state.users.data.find(user => user.id === data.id));

    if (isDuplicated) {
      yield put(UserActions.addUserFailure('O usuário já foi adicionado.'));
    } else {
      const userData = {
        id: data.id,
        name: data.name,
        bio: data.bio,
        avatar_url: data.avatar_url,
        coordinates: action.payload.coordinates,
      };

      yield put(UserActions.addUserSuccess(userData));
    }
  } catch (err) {
    yield put(UserActions.addUserFailure('Usuário não encontrado'));
  } finally {
    yield put(UserModalActions.hideModal());
  }
}
