
import React from "react";
import {StyleSheet, View, Dimensions} from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";

import mapMarker from "./src/images/map-marker-happy.png";

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} 
        style={styles.map}
        initialRegion={{
          latitude: -27.2892052,
          longitude: -49.6401092,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker
          icon={mapMarker}
          coordinate={{
            latitude: -27.2892052,
            longitude: -49.6401092,
          }}
        />
      </MapView>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
