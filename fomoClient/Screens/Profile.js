import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';

const Profile = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [gender, setGender] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [profilePicture, setProfilePicture] = useState(null);

    const handleContinuePress = () => {
        navigation.navigate('profileLocation');
    };

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || dateOfBirth;
        setShowDatePicker(Platform.OS === 'ios');
        setDateOfBirth(currentDate);
    };

    const handleSelectProfilePicture = async () => {
        // console.log(result.uri);
        console.log("this and that")
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        console.log(result.uri);
        console.log("this")
        if (!result.canceled) {
            setProfilePicture(result.uri);
            
        }
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >

            <View style={styles.topContainer}>
                <Image source={require('../assets/images/logo.png')} style={styles.logo} />
                <Text style={styles.heading}>Setup Your Profile</Text>
                {/* Profile Picture */}
                <TouchableOpacity style={styles.profilePictureContainer} onPress={handleSelectProfilePicture}>
                    <View style={styles.profilePictureFrame}>
                        {profilePicture ? (
                            <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
                        ) : (
                            <Ionicons name="person-circle-outline" size={120} color="#C4C4C4" />
                        )}
                    </View>
                    {/* Camera Icon */}
                    <View style={styles.cameraIcon}>
                        <Ionicons name="camera-outline" size={24} color="#FFF" />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.inputContainer}>
                    <View style={styles.inputWrapper}>
                        <Ionicons name="person-outline" size={24} color="#666666" />
                        <TextInput
                            style={styles.input}
                            placeholder="User Name"
                            value={username}
                            onChangeText={setUsername}
                        />
                    </View>
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
                    <View style={styles.inputWrapper}>
                        <Ionicons name="transgender-outline" size={24} color="#666666" />
                        <Picker
                            selectedValue={gender}
                            style={{ height: 30, width: '100%' }}
                            onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                        >
                            <Picker.Item label="Gender" value="" style={styles.input} />
                            <Picker.Item label="Male" value="male" style={styles.input} />
                            <Picker.Item label="Female" value="female" style={styles.input} />
                            <Picker.Item label="Other" value="other" style={styles.input} />
                        </Picker>
                    </View>
                    <View style={styles.inputWrapper}>
                        <Ionicons name="calendar-outline" size={24} color="#666666" />
                        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                            <Text style={styles.input} placeholder="Date of Birth">
                                {dateOfBirth.toLocaleDateString()}
                            </Text>
                        </TouchableOpacity>
                        {showDatePicker && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={dateOfBirth}
                                mode="date"
                                is24Hour={true}
                                display="spinner"
                                onChange={handleDateChange}
                                style={{ backgroundColor: 'white' }}
                            />
                        )}
                    </View>
                </View>


                <TouchableOpacity style={styles.signInButton} onPress={handleContinuePress}>
                    <Text style={styles.signInButtonText}>CONTINUE</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Profile

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
        marginBottom: 20,
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
    profilePictureContainer: {
        marginTop: 20,
        width: 130,
        height: 130,
        borderRadius: 60,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    profilePictureFrame: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    profilePicture: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    cameraIcon: {
        position: 'absolute',
        backgroundColor: '#FF4459',
        borderRadius: 20,
        padding: 3,
        bottom: 19, // Adjusted bottom position
        right: 20, // Adjusted right position
    }
    
});
