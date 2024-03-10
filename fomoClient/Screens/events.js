import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image, value } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NavBar from '../components/NavBar';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

const eventsData = [
    {
        id: 1,
        name: "Mega Halloween party",
        location: "Miami, USA",
        dateTime: "18 jun, 2PM",
        image: require('../assets/images/events.png') 
    },
    {
        id: 2,
        name: "Music Night Party",
        location: "Miami, USA",
        dateTime: "18 jun, 2PM",
        image: require('../assets/images/event2.png')
    },

];

export default function events() {

    const [modalState, setModalState] = useState(false);
    const [value, onChangeText] = useState('');
    const navigation = useNavigation();

    const [distance, setDistance] = useState(5); // Initial distance value
    const [selectedCategories, setSelectedCategories] = useState([]);

    const [events, setEvents] = useState(eventsData);

    const handleJoin = (eventId) => {
        // Handle join action for the event with the given ID
        console.log("Join event with ID:", eventId);
    };

    const handleNotifications = () => {
        navigation.navigate('NotificationScreen');
    };
    const handleEventPress = () => {
        navigation.navigate('eventDetail');
    };

    const handleBackPress = () => {
        navigation.navigate('home');
    };

    const handleFilterModal = () =>{
        setModalState(true);
    };

    const applyFilters = () => {
        console.log('Selected categories:', selectedCategories);
        console.log('Selected distance:', distance);
        setModalState(false);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={{ marginBottom: 10, marginHorizontal: 10 }}>
            <View
                style={{
                    borderRadius: 15, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
                }}
            >
                <View style={{ width: 250, height: 180 }}>
                    <Image source={item.image} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
                </View>
                <View style={{ position: 'absolute', top: 18, right: 16, backgroundColor: 'white', borderRadius: 20, padding: 6 }}>
                    <Ionicons name="heart-outline" size={24} color="red" />
                </View>
                <View style={{ backgroundColor: '#FFFFFF', borderBottomLeftRadius: 15, borderBottomRightRadius: 15, padding: 10 }}>
                    <Text style={{ fontFamily: 'Poppins', fontSize: 17, fontWeight: '500', lineHeight: 27, textAlign: 'center' }}>{item.name}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name="location-outline" size={18} color="gray" style={{ marginRight: 2 }} />
                            <Text style={{ fontFamily: 'Poppins', fontSize: 14, color: 'gray' }}>{item.location}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name="time-outline" size={18} color="gray" style={{ marginRight: 2 }} />
                            <Text style={{ fontFamily: 'Poppins', fontSize: 14, color: 'gray' }}>{item.dateTime}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );




    const notificationIcon = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 17.8476C17.6392 17.8476 20.2481 17.1242 20.5 14.2205C20.5 11.3188 18.6812 11.5054 18.6812 7.94511C18.6812 5.16414 16.0452 2 12 2C7.95477 2 5.31885 5.16414 5.31885 7.94511C5.31885 11.5054 3.5 11.3188 3.5 14.2205C3.75295 17.1352 6.36177 17.8476 12 17.8476Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.3888 20.8572C13.0247 22.3719 10.8966 22.3899 9.51945 20.8572" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 50, paddingHorizontal: 20 }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons onPress={handleBackPress} name="arrow-back-outline" size={25} color="#666666" />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, marginLeft: 10 }}>EVENTS</Text>
                </View>
                <SvgXml xml={notificationIcon} width={25} height={25} onPress={handleNotifications} />
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20, paddingHorizontal: 20 }}>
                <View style={{ flex: 1, backgroundColor: '#F0F0F0', flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name="search" size={24} color="gray" style={{ paddingHorizontal: 10 }} />
                    <TextInput
                        style={{ height: 40, paddingHorizontal: 10, fontFamily: 'Poppins', fontSize: 16, fontWeight: '400', lineHeight: 24, letterSpacing: 0, flex: 1 }} // Apply custom font and other styles
                        placeholder="Search"
                        onChangeText={text => onChangeText(text)}
                        value={value}
                    />
                    <Ionicons name="filter" size={24} color="gray" style={{ marginHorizontal: 10 }} onPress={handleFilterModal}/>
                    <Modal isVisible={modalState} onBackdropPress={() => setModalState(false)}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalHeader}>Filter</Text>
                    <View style={styles.sliderContainer}>
                        <Text style={styles.sliderLabel}>Distance: {distance} km</Text>
                        {/* <RangeSlider
                            min={1}
                            max={20}
                            step={1}
                            initialLowValue={distance}
                            onValueChanged={(low, _) => setDistance(low)}
                        /> */}
                    </View>
               
                    <View style={styles.categoryContainer}>
                        <Text style={styles.categoryLabel}>Categories:</Text>
                        <TouchableOpacity
                            style={[styles.categoryButton, selectedCategories.includes('Music') && styles.selectedCategoryButton]}
                            onPress={() =>
                                setSelectedCategories(prev => (prev.includes('Music') ? prev.filter(cat => cat !== 'Music') : [...prev, 'Music']))
                            }>
                            <Text style={styles.categoryButtonText}>Music</Text>
                            <Text style={styles.categoryButtonText}>Concert</Text>
                            <Text style={styles.categoryButtonText}>Drama</Text>
                            <Text style={styles.categoryButtonText}>Workshops</Text>
                        </TouchableOpacity>
       
                    </View>
                    <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
                        <Text style={styles.applyButtonText}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
                </View>
            </View>

            <Text style={{ fontFamily: 'Poppins', fontSize: 22, fontWeight: '500', lineHeight: 33, letterSpacing: 0, marginTop: 20, marginLeft: 20 }}>Trending</Text>
            <View>
                <TouchableOpacity onPress={handleEventPress}>
                    <FlatList
                        data={eventsData}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ marginTop: 20, paddingHorizontal: 20 }}
                    />
                </TouchableOpacity>
            </View>


            <Text style={{ fontFamily: 'Poppins', fontSize: 22, fontWeight: '500', lineHeight: 33, letterSpacing: 0, marginTop: 20, marginLeft: 20 }}>Feed</Text>


            <View>

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
                                    <Ionicons name="heart-outline" size={22} color="red" style={{ marginLeft: 'auto' }} />
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                                    <Ionicons name="location-outline" size={18} color="gray" style={{ marginRight: 5 }} />
                                    <Text style={{ fontFamily: 'Poppins', fontSize: 14, color: 'gray', marginRight: 10 }}>{event.location}</Text>
                                    <Ionicons name="time-outline" size={18} color="gray" style={{ marginRight: 5 }} />
                                    <Text style={{ fontFamily: 'Poppins', fontSize: 14, color: 'gray' }}>{event.dateTime}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                                        <Ionicons name="person-circle-outline" size={24} color="gray" style={{ marginRight: -9 }} />
                                        <Ionicons name="person-circle-outline" size={24} color="gray" style={{ marginRight: -9 }} />
                                        <Ionicons name="person-circle-outline" size={24} color="gray" style={{ marginRight: -9 }} />
                                    </View>
                                    <TouchableOpacity style={{ backgroundColor: '#FF6347', paddingVertical: 5, width: 100, height: 33, paddingHorizontal: 10, borderRadius: 5 }}>
                                        <Text style={{ fontFamily: 'Poppins', textAlign: 'center', fontSize: 14, color: 'white' }}>JOIN US</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <NavBar />
        </View>
    )
}

const styles = StyleSheet.create({
    eventContainer: {
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 2 },
        marginBottom: 10,
        borderRadius: 15,
        backgroundColor: '#fff',
        shadowOpacity: 0.5,
        elevation: 5,
        padding: 15,
    },
    eventDetails: {
        flex: 1,
        padding: 10,
    },
    eventTitle: {
        fontFamily: 'Poppins-Medium',
        marginBottom: 12,
    },
    eventInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    eventText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        marginLeft: 5,
    },
    eventAttendees: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    eventImage: {
        width: 120,
        height: 120,
    },
    joinButton: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    joinButtonText: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    },
    icon: {
        marginRight: 5,
    },

    modalContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
    },
    modalHeader: {
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        marginBottom: 10,
    },
    sliderContainer: {
        marginBottom: 20,
    },
    sliderLabel: {
        fontFamily: 'Poppins',
        fontSize: 16,
        marginBottom: 5,
    },
    categoryContainer: {
        marginBottom: 20,
    },
    categoryLabel: {
        fontFamily: 'Poppins',
        fontSize: 16,
        marginBottom: 5,
    },
    categoryButton: {
        backgroundColor: '#E5E5E5',
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginRight: 10,
    },
    selectedCategoryButton: {
        backgroundColor: '#FF6347',
    },
    categoryButtonText: {
        fontFamily: 'Poppins',
        fontSize: 14,
        color: 'black',
    },
    applyButton: {
        backgroundColor: '#FF6347',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignSelf: 'center',
    },
    applyButtonText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        color: 'white',
    },
});
