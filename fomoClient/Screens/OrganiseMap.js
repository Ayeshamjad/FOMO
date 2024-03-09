import React, { useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

const OrganiseMap = (navigation) => {
    const mapRef = useRef(null);

    const handleContinuePress = () => {
    //   navigation.navigate('Preference');
    };
    const handleShowLocation = () => {
        if (mapRef.current) {
          navigator.geolocation.getCurrentPosition(
            position => {
              const { latitude, longitude } = position.coords;
              mapRef.current.animateToRegion({
                latitude,
                longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              });
            },
            error => console.error(error),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
          );
        }
      };
    
      return (
        <View style={styles.container}>
          <View style={styles.searchBar}>
            
            <Text>Search Bar</Text>
          </View>
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              ref={mapRef}
            >
              <Marker
                coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                title="Marker"
                description="This is a marker"
              />
            </MapView>
            <TouchableOpacity style={styles.locationButton} onPress={handleShowLocation}>
              <Ionicons name="locate-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.signInButton} onPress={handleContinuePress}>
            <Text style={styles.signInButtonText}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#F0F0F0', // Background color
      },
      searchBar: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: 'white', // Background color for search bar
      },
      mapContainer: {
        flex: 1,
      },
      map: {
        flex: 1,
      },
      locationButton: {
        position: 'absolute',
        bottom: 115, // Adjust this value to move the location button higher
        right: 20,
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 10,
        elevation: 5,
      },
      signInButton: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: '#FF4459',
        borderRadius: 10,
        padding: 12,
        marginVertical: 10,
        width: '90%', // Set the width to 80% of the screen width
        alignSelf: 'center', // Center the button horizontally
      },
      signInButtonText: {
        fontFamily: 'Poppins',
        fontSize: 22,
        fontWeight: '500',
        textAlign: 'center',
        color: 'white',
      },
    });


export default OrganiseMap
