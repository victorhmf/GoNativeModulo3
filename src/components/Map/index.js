import React, { Component } from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import {
  AnnotationContainer,
  AnnotationFill,
  CallOutContainer,
  CallOutInner,
  UserBio,
  UserName,
  Tip,
} from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Creators as userModalActions } from '~/store/ducks/userModal';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoidmljdG9yaG1mZCIsImEiOiJjanN1ZTJrcWgyZGsyNGFwOWRjajV3djRjIn0.djPD1r_psYOL770qmbYJ1A',
);

class Map extends Component {
  static propTypes = {
    showModal: PropTypes.func.isRequired,
    users: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      bio: PropTypes.string,
      avatar_url: PropTypes.string,
    }).isRequired,
  };

  handleOnLongPress = async (e) => {
    const { screenPointX, screenPointY } = e.properties;

    const { showModal } = this.props;

    const coordinates = await this.map.getCoordinateFromView([screenPointX, screenPointY]);
    await showModal(coordinates);
  };

  renderCallOut = user => (
    <MapboxGL.Callout>
      <CallOutContainer>
        <CallOutInner>
          <UserName>{user.name}</UserName>
          <UserBio>{user.bio}</UserBio>
        </CallOutInner>
        <Tip />
      </CallOutContainer>
    </MapboxGL.Callout>
  );

  renderAnnotations = user => (
    <MapboxGL.PointAnnotation key={user.id} id={user.id.toString()} coordinate={user.coordinates}>
      <AnnotationContainer>
        <AnnotationFill source={{ uri: user.avatar_url }} />
      </AnnotationContainer>
      {this.renderCallOut(user)}
    </MapboxGL.PointAnnotation>
  );

  render() {
    const { users } = this.props;
    return (
      <MapboxGL.MapView
        centerCoordinate={[-49.6446024, -27.2108001]}
        style={{ flex: 1 }}
        ref={e => (this.map = e)}
        showUserLocation
        onLongPress={this.handleOnLongPress}
        styleURL={MapboxGL.StyleURL.Dark}
      >
        {users.data.map(user => this.renderAnnotations(user))}
      </MapboxGL.MapView>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(userModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
