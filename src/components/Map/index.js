import React, { Component } from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { Container, AnnotationContainer, AnnotationFill } from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as userModalActions } from '~/store/ducks/userModal';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoidmljdG9yaG1mZCIsImEiOiJjanN1ZTJrcWgyZGsyNGFwOWRjajV3djRjIn0.djPD1r_psYOL770qmbYJ1A',
);

class Map extends Component {
  handleOnLongPress = async (e) => {
    const { screenPointX, screenPointY } = e.properties;

    const { showModal } = this.props;

    const coordinates = await this.map.getCoordinateFromView([screenPointX, screenPointY]);
    await showModal(coordinates);
  };

  renderAnnotations = () => (
    <MapboxGL.PointAnnotation id="rocketseat" coordinate={[-49.6446024, -27.2108001]}>
      <AnnotationContainer>
        <AnnotationFill />
      </AnnotationContainer>

      <MapboxGL.Callout title="Rocketseat House" />
    </MapboxGL.PointAnnotation>
  );

  render() {
    return (
      <MapboxGL.MapView
        centerCoordinate={[-49.6446024, -27.2108001]}
        style={{ flex: 1 }}
        ref={e => (this.map = e)}
        showUserLocation
        onLongPress={this.handleOnLongPress}
        styleURL={MapboxGL.StyleURL.Dark}
      >
        {this.renderAnnotations()}
      </MapboxGL.MapView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators(userModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
