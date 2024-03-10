import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

const OrganiseMap = (navigation) => {
    const mapRef = useRef(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleContinuePress = () => {
        // navigation.navigate('Preference');
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

    const handleSearch = () => {
        console.log('Searching for:', searchQuery);
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
            {/* <Ionicons name="search" size={24} color="black" onPress={handleSearch} /> */}
                <TextInput
                    style={styles.input}
                    placeholder="Search..."
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                />
            </View>
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
            <View style={styles.searchButton}>
                
            </View>
            <TouchableOpacity style={styles.locationButton} onPress={handleShowLocation}>
                <Ionicons name="locate-outline" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.signInButton} onPress={handleContinuePress}>
                <Text style={styles.signInButtonText}>CONTINUE</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0', 
    },
    searchBar: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 15,
        paddingBottom: 10,
        backgroundColor: 'transparent', 
        position: 'absolute',
        top: 39,
        left: 0,
        right: 0,
        zIndex: 1, 
    },
    input: {
        flex: 1,
        height: 40,
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#F0F0F0',
    },
    map: {
        flex: 1,
    },
    searchButton: {
        position: 'absolute',
        top: 58,
        right: 26,
        backgroundColor: '#F0F0F0',
        zIndex: 1, 
    },
    locationButton: {
        position: 'absolute',
        bottom: 115, 
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
        width: '90%', 
        alignSelf: 'center', 
    },
    signInButtonText: {
        fontFamily: 'Poppins',
        fontSize: 22,
        fontWeight: '500',
        textAlign: 'center',
        color: 'white',
    },
});

export default OrganiseMap;