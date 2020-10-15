
import React from "react";
import {StyleSheet, View, Dimensions} from "react-native";
import MapView from "react-native-maps";

export default function App() {
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        initialRegion={{
          latitude: -27.2892052,
          longitude: -49.6401092,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
      }}
      />      
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
