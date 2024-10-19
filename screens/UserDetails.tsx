import React from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function UserDetails({ route }) {
  const { user } = route.params;

  const userLocation = {
    latitude: parseFloat(user.address.geo.lat),
    longitude: parseFloat(user.address.geo.lng),
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.name}>{user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Phone: {user.phone}</Text>
      <Text>Website: {user.website}</Text>
      <Text>Address: {user.address.street}, {user.address.city}</Text>

      {/* Displaying Map */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={userLocation}
        >
          <Marker coordinate={userLocation} title={user.name} />
        </MapView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  mapContainer: {
    marginTop: 16,
    height: 300,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
