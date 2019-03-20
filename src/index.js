import React from 'react';
import { Provider } from 'react-redux';

import '~/config/ReactotronConfig';
import store from '~/store';

import Main from '~/pages/Main';

// import styles from './styles';

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
