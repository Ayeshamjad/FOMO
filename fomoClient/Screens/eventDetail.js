import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image, value } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const EventDetail = () => {
    const navigation = useNavigation();

    const [activeSlide, setActiveSlide] = useState(0);

    const handleBackPress = () => {
        navigation.navigate('home');
    };

    const handleChatPress = () => {
        navigation.navigate('pChat');
    };

    const handleBuyTicketPress = () => {
        navigation.navigate('payment');
    };

    const images = [
        { uri: require('../assets/images/events.png')},
        { uri:require('../assets/images/events.png') },
        { uri: require('../assets/images/events.png')},
    ];

    const renderCarouselItem = ({ item, index }) => {
        return (
            <View style={{ height: '40%', backgroundColor: 'transparent' }}>
                <Image source={item} style={{ flex: 1 }} resizeMode="cover" />
            </View>
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 50, paddingHorizontal: 20 }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons onPress={handleBackPress} name="arrow-back-outline" size={25} color="#666666" />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, marginLeft: 10 }}>EVENT DETAIL</Text>
                </View>
            </View>

            {/* Carousel */}
            <View style={{ height: '40%' }}>
                <Carousel
                    data={images}
                    renderItem={renderCarouselItem}
                    sliderWidth={500}
                    itemWidth={300}
                    onSnapToItem={(index) => setActiveSlide(index)}
                />
                <Pagination
                    dotsLength={images.length}
                    activeDotIndex={activeSlide}
                    containerStyle={{ position: 'absolute', bottom: 10, alignSelf: 'center' }}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 8,
                        backgroundColor: 'rgba(0, 0, 0, 0.92)'
                    }}
                    inactiveDotStyle={{
                        backgroundColor: 'rgba(0, 0, 0, 0.3)'
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
            </View>

            {/* Main content of the screen goes here */}

            {/* Bottom bar with chat icon and buy ticket button */}
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
