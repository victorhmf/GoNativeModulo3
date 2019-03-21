import { combineReducers } from 'redux';
import userModal from './userModal';
import users from './users';

const reducers = combineReducers({
  userModal,
  users,
});

export default reducers;
