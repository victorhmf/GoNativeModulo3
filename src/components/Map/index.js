import React, { Component } from 'react';

import { View, Text } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import AddUserModal from '~/components/AddUserModal';
import { Container, AnnotationContainer, AnnotationFill } from './styles';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoidmljdG9yaG1mZCIsImEiOiJjanN1ZTJrcWgyZGsyNGFwOWRjajV3djRjIn0.djPD1r_psYOL770qmbYJ1A',
);

export default class Map extends Component {
  state = {};

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
        showUserLocation
        styleURL={MapboxGL.StyleURL.Dark}
      >
        {this.renderAnnotations()}
      </MapboxGL.MapView>
    );
  }
}
