import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ForgotPass = () => {
    const navigation = useNavigation();
    const [phoneNo, setPhoneNo] = useState('');
    const handleContinuePress = () => {
        navigation.navigate('VerifyOtp');
    };

    const handleBackPress = () => {
        navigation.navigate('Signin');
    };
    
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TouchableOpacity onPress={handleBackPress} style={{ position: 'absolute', top: 40, left: 10, padding: 10 }}>
                <Ionicons name="arrow-back-outline" size={30} color="#666666" />
            </TouchableOpacity>

            <View style={styles.topContainer}>
                <Image source={require('../assets/images/logo.png')} style={styles.logo} />
                <Text style={styles.heading}>Forgot Password</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.inputContainer}>
                    <View style={styles.inputWrapper}>
                        <Ionicons name="call-outline" size={24} color="#666666" />
                        <TextInput
                            style={styles.input}
                            placeholder="Phone Number"
                            value={phoneNo}
                            onChangeText={setPhoneNo}
                            keyboardType="phone-pad"

                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.signInButton} onPress={handleContinuePress}>
                    <Text style={styles.signInButtonText}>CONTINUE</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default ForgotPass;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    topContainer: {
        alignItems: 'center',
    },
    bottomContainer: {
        width: '100%',
        justifyContent: 'space-between',
    },
    logo: {
        width: 90,
        height: 90,
        marginTop: 50,
    },
    heading: {
        fontFamily: 'Poppins',
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 20,
    },
    inputContainer: {
        width: '100%',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        padding: 5,
        marginBottom: 50,
    },
    input: {
        flex: 1,
        marginLeft: 10,
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'left',
        color: '#666666',
    },
    signInButton: {
        backgroundColor: '#FF4459',
        borderRadius: 10,
        padding: 12,
        width: '100%',
        marginBottom: 30,
    },
    signInButtonText: {
        fontFamily: 'Poppins',
        fontSize: 22,
        fontWeight: '500',
        textAlign: 'center',
        color: 'white',
    },
});
