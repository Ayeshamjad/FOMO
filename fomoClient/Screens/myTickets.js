import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const eventsData = [
    {
        id: 1,
        name: "Mega Halloween party",
        location: "Miami, USA",
        dateTime: "18 jun, 2PM",
        image: require('../assets/images/events.png') // Replace with actual image paths
    },
    {
        id: 2,
        name: "Music Night Party",
        location: "Miami, USA",
        dateTime: "18 jun, 2PM",
        image: require('../assets/images/event2.png')// Replace with actual image paths
    },
    
    {
        id: 2,
        name: "Music Night Party",
        location: "Miami, USA",
        dateTime: "18 jun, 2PM",
        image: require('../assets/images/event2.png')// Replace with actual image paths
    },
];


const MyTickets = () => {
    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.navigate('dispute');
    };

    const handleMyTicketsPress = () => {
        
        navigation.navigate('myTickets');
    };

    const handleSoldTicketsPress = () => {
        
        navigation.navigate('soldTickets');
    };
    const handleEventPress = () => {
        navigation.navigate('showTicket');
    };
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 50, paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons onPress={handleBackPress} name="arrow-back-outline" size={25} color="#666666" />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, marginLeft: 10 }}>TICKETS</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, marginHorizontal:50 }}>
                <TouchableOpacity style={styles.signInButton} onPress={handleMyTicketsPress}>
                    <Text style={styles.signInButtonText}>My Tickets</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleSoldTicketsPress}>
                    <Text style={styles.buttonText}>Sold Tickets</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={{ flex: 1, height: 400, marginTop: 10, marginHorizontal: 20 }} showsVerticalScrollIndicator={false}>
                {eventsData.map(event => (
                    <TouchableOpacity key={event.id} style={styles.eventContainer} onPress={handleEventPress} >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: 100, height: 100, borderRadius: 10, overflow: 'hidden', marginRight: 10 }}>
                                <Image source={event.image} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
                            </View>
                            <View style={{ flex: 1 }}>
                                <View style={{ flexDirection: 'row', marginVertical: 8 }}>
                                    <Text style={{ fontFamily: 'Poppins', fontSize: 16.5, fontWeight: '500' }}>{event.name}</Text>
                                    
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 ,justifyContent: 'space-between'}}>
                                    <Ionicons name="location-outline" size={18} color="gray" style={{ marginRight: 2 }} />
                                    <Text style={{ fontFamily: 'Poppins', fontSize: 14, color: 'gray', marginRight: 10 }}>{event.location}</Text>
                                    <Ionicons name="time-outline" size={18} color="gray" style={{ marginRight: 2 }} />
                                    <Text style={{ fontFamily: 'Poppins', fontSize: 14, color: 'gray' }}>{event.dateTime}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                                    <Text style={{ fontFamily: 'Poppins', fontSize: 14, color: 'gray' }}>Muhammad Ali</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                                    <Text style={{ fontFamily: 'Poppins', fontSize: 14, color: 'gray' }}>+1 223 445 67</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>

        </View>
    );
}

export default MyTickets;

const styles = StyleSheet.create({
    button: {
        border: '#FF4459',
        borderColor:'#ff4459',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        borderWidth:1,
        width:'50%',
    },
    buttonText: {
        color: 'black',
        fontFamily: 'Poppins',
        fontSize: 17.5,
        fontWeight: '500',
        textAlign: 'center',
    },
    signInButton: {
        backgroundColor: '#FF4459',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        marginRight:10,
        width: '50%',
    },
    signInButtonText: {
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        color:'white',
    }      
});
