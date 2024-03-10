import React, { useState } from 'react';
import { View, Text, Button, FlatList, KeyboardAvoidingView, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

const Organise = () => {
    const navigation = useNavigation();
    const handleSelectOnMapPress = () => {
        navigation.navigate('OrganiseMap');
    };
    const handleContinuePress = () => {
        navigation.navigate('organise2');
    };
    
    const handleBackPress = () => {
        navigation.navigate('home');
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 50, paddingHorizontal: 20 }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons onPress={handleBackPress} name="arrow-back-outline" size={25} color="#666666" />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, marginLeft: 10 }}>ORGANIZE EVENTS</Text>
                </View>
            </View>

            <KeyboardAvoidingView style={{ flex: 1, paddingHorizontal: 20 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputWrapper}>
                            <TextInput placeholder="Event Title" style={styles.input} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={[styles.inputWrapper, { flex: 1 }]}>
                                <TextInput placeholder="Date" style={styles.input} />
                                <Ionicons name="calendar-outline" size={20} color="#FF4459" />
                            </View>
                            <View style={[styles.inputWrapper, { flex: 1, marginLeft: 10 }]}>
                                <TextInput placeholder="Time" style={styles.input} />
                                <Ionicons name="time-outline" size={20} color="#FF4459" />
                            </View>
                        </View>
                        <View style={styles.inputWrapper}>
                            <Ionicons name="location-outline" size={20} color="#666666" />
                            <TextInput placeholder="Location" style={styles.input} />
                        </View>
                        <TouchableOpacity style={styles.mapButton} onPress={handleSelectOnMapPress}>
                            <Text style={styles.loginLink}>Select on Map</Text>
                        </TouchableOpacity>
                        <View style={[styles.inputWrapper, { borderColor: '#C7C7C7', borderWidth: 1, paddingVertical: 10, borderRadius: 5, marginTop: 10, }]}>
                            <TextInput placeholder="Description" style={[styles.input, { height: 110, }]} multiline />
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                            <Text style={{ fontFamily: 'Poppins', fontSize: 16 }}>Ticket Price</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name="toggle" size={24} color="#FF4459" style={{ marginRight: 5 }} />
                                
                            </View>
                        </View>

                        <View style={styles.inputWrapper}>
                            <Ionicons name="cash-outline" size={20} color="#666666" />
                            <TextInput placeholder="Price" style={styles.input} />
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

            <TouchableOpacity style={styles.signInButton} onPress={handleContinuePress}>
                <Text style={styles.signInButtonText}>CONTINUE</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Organise;

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        padding: 5,
        marginTop: 20,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#C7C7C7',
        padding: 5,
        marginBottom: 25,
    },
    input: {
        flex: 1,
        marginLeft: 10,
        fontSize: 17,
        fontWeight: '400',
        textAlign: 'left',
        color: '#666666',
        fontFamily: 'Poppins',
    },
    signInButton: {
        backgroundColor: '#FF4459',
        borderRadius: 10,
        padding: 12,
        width: '90%',
        marginLeft: 'auto', 
        marginRight: 'auto', 
        marginBottom: 30,
    },
    
    signInButtonText: {
        fontFamily: 'Poppins',
        fontSize: 22,
        fontWeight: '500',
        textAlign: 'center',
        color: 'white',
    },
    mapButton: {
        marginBottom: 0,
        fontFamily: 'Poppins',
    },
    loginLink: {
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 24,
        textAlign: 'center',
        color: '#FF4459',
        textDecorationLine: 'underline',
    },
});
