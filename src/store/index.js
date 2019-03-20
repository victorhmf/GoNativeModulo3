import { createStore, compose } from 'redux';

import rootReducer from './ducks';

const store = __DEV__
  ? createStore(rootReducer, compose(console.tron.createEnhancer()))
  : createStore(rootReducer);

export default store;
