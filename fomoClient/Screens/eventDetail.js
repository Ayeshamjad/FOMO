import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image, value } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const EventDetail = () => {
    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.navigate('events');
    };

    const handleChatPress = () => {
        navigation.navigate('pChat');
    };

    const handleBuyTicketPress = () => {
        navigation.navigate('payment');
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 50, paddingHorizontal: 20 }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons onPress={handleBackPress} name="arrow-back-outline" size={25} color="#666666" />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, marginLeft: 10 }}>EVENT DETAIL</Text>
                </View>
            </View>

          
            <View style={styles.bottomBar}>
                <Ionicons onPress={handleChatPress} name="chatbubble-ellipses-outline" size={30} color="#FF4459" style={{ marginHorizontal: 10 }} />
                <TouchableOpacity style={styles.signInButton} onPress={handleBuyTicketPress}>
                    <Text style={styles.signInButtonText}>Buy Ticket</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 10,
        right: 0,
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    signInButton: {
        backgroundColor: '#FF4459',
        borderRadius: 10,
        padding: 12,
        width: '75%',
    },
    signInButtonText: {
        fontFamily: 'Poppins',
        fontSize: 22,
        fontWeight: '500',
        textAlign: 'center',
        color: 'white',
    },
});

export default EventDetail;
