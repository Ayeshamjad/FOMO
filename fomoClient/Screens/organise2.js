import React, { useState } from 'react';
import { View, Text, Button, FlatList, KeyboardAvoidingView, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const organise2 = () => {
    const handleContinuePress = () => {
        // Navigate to the map screen
        navigation.navigate('home');
    };
    const navigation = useNavigation();
    const handleBackPress = () => {
        navigation.navigate('Organise');
    };

    // Sample image data
    const imagesData = [
        { id: '1', source: require('../assets/images/event2.png') },
        { id: '2', source: require('../assets/images/event2.png') },
        { id: '3', source: require('../assets/images/event2.png') },
    ];

    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'space-between', paddingHorizontal: 10 }}>
            <View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 50, paddingHorizontal: 20 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons onPress={handleBackPress} name="arrow-back-outline" size={25} color="#666666" />
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, marginLeft: 10 }}>IMAGES</Text>
                    </View>
                </View>

                <View style={styles.paymentOption}>
                    <View style={{ flex: 1 }}>
                        <View style={{ borderStyle: 'dotted', borderWidth: 1, borderRadius: 5, borderColor: '#FF4459', padding: 20, alignItems: 'center' }}>
                            <Ionicons name="cloud-upload-outline" size={48} color="#FF4459" />
                            <Text style={{ marginTop: 10, fontFamily: 'Poppins',fontSize: 14,fontWeight: '600', lineHeight: 24, textAlign: 'center',
                                color: '#FF4459',
                                textDecorationLine: 'underline',
                            }}>Upload Event Images</Text>
                        </View>
                    </View>
                </View>

                <FlatList
                    data={imagesData}
                    horizontal
                    renderItem={({ item }) => (
                        <Image source={item.source} style={styles.image} />
                    )}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{ marginTop: 20 }}
                />
            </View>

            <TouchableOpacity style={styles.signInButton} onPress={handleContinuePress}>
                <Text style={styles.signInButtonText}>LAUNCH EVENT</Text>
            </TouchableOpacity>
        </View>
    )
}

export default organise2

const styles = StyleSheet.create({

    signInButton: {
        backgroundColor: '#FF4459',
        borderRadius: 10,
        padding: 12,
        width: '90%',
        marginLeft: 'auto', // Center horizontally
        marginRight: 'auto', // Center horizontally
        marginBottom: 30,
    },

    signInButtonText: {
        fontFamily: 'Poppins',
        fontSize: 22,
        fontWeight: '500',
        textAlign: 'center',
        color: 'white',
    },

    paymentOption: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 15,
        marginBottom: 28,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 3,
        marginTop: 30,
        marginHorizontal: 15,
    },

    image: {
        width: 110,
        height: 110,
        borderRadius: 5,
        marginHorizontal: 7,
    },
});
