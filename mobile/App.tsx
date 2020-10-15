
import React from "react";
import {StyleSheet, View, Dimensions, Text} from "react-native";
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from "react-native-maps";

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
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
          coordinate={{
            latitude: -27.2892052,
            longitude: -49.6401092,
          }}
        />
        <Callout tooltip={true}>
          <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar das crianças</Text>
          </View>
        </Callout>
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
  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 16,
    justifyContent: "center",
  },
  calloutText: {
    color: "#0089a5",
    fontSize: 14,
  },
});
