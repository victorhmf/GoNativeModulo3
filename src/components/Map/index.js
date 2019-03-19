import React, { Component } from 'react';

import { View, StyleSheet } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoidmljdG9yaG1mZCIsImEiOiJjanN1ZTJrcWgyZGsyNGFwOWRjajV3djRjIn0.djPD1r_psYOL770qmbYJ1A',
);

// import styles from './styles';

export default class Map extends Component {
  renderAnnotations() {
    return (
      <MapboxGL.PointAnnotation id="rocketseat" coordinate={[-49.6446024, -27.2108001]}>
        <View style={styles.annotationContainer}>
          <View style={styles.annotationFill} />
        </View>
        <MapboxGL.Callout title="Rocketseat House" />
      </MapboxGL.PointAnnotation>
    );
  }

  render() {
    return (
      <MapboxGL.MapView
        centerCoordinate={[-49.6446024, -27.2108001]}
        style={styles.container}
        showUserLocation
        styleURL={MapboxGL.StyleURL.Dark}
      >
        {this.renderAnnotations()}
      </MapboxGL.MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  annotationContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  annotationFill: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#7159C1',
    transform: [{ scale: 0.8 }],
  },
});
