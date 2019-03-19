import React, { Fragment } from 'react';

// import { View } from 'react-native';
import Map from '~/components/Map';
import AddUserModal from '~/components/AddUserModal';

// import styles from './styles';

const Main = () => (
  <Fragment>
    <Map />
    <AddUserModal />
  </Fragment>
);

export default Main;
