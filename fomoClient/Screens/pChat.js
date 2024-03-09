import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const pChat = () => {
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.navigate('home');
  };

  // Sample data for chat messages
  const messages = [
    { id: 1, text: "Hey, how's it going?", sender: "receiver", time: "10:00 AM", profilePhoto: require('../assets/images/events.png') },
    { id: 2, text: "Hey! Doing good, thanks.", sender: "sender", time: "10:05 AM", profilePhoto: require('../assets/images/event2.png') },
    { id: 3, text: "Want to catch up later?", sender: "receiver", time: "10:10 AM", profilePhoto: require('../assets/images/events.png') },
    { id: 4, text: "Sure, that sounds great.", sender: "sender", time: "10:15 AM", profilePhoto: require('../assets/images/event2.png') },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 50, paddingHorizontal: 20 }}>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons onPress={handleBackPress} name="arrow-back-outline" size={25} color="#666666" />
          <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, marginLeft: 10 }}>JAMES TAYLOR</Text>
        </View>
      </View>

      {/* Chat messages */}
      <ScrollView contentContainerStyle={{ paddingVertical: 20, paddingHorizontal: 10 }}>
        {messages.map((message) => (
          <View key={message.id} style={{ alignSelf: message.sender === "sender" ? 'flex-end' : 'flex-start', marginBottom: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: message.sender === "sender" ? 'flex-end' : 'flex-start' }}>
              {message.sender === "receiver" && <Image source={message.profilePhoto} style={styles.profilePhoto} />}
              <View style={[styles.messageContainer, { backgroundColor: message.sender === "sender" ? '#FFFFFF' : '#FF4459' }]}>
                <Text style={[styles.messageText, { color: message.sender === "sender" ? '#000000' : '#FFFFFF' }]}>{message.text}</Text>
              </View>
              {message.sender === "sender" && <Image source={message.profilePhoto} style={styles.profilePhoto} />}
            </View>
            <Text style={[styles.timeText, { alignSelf: message.sender === "sender" ? 'flex-start' : 'flex-end' }]}>{message.time}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Bottom navbar */}
      <View style={styles.bottomNavbar}>
        <View style={{ position: 'relative', flex: 1 }}>
          <TextInput style={styles.input} placeholder="Type a message..." />
          <TouchableOpacity style={styles.cameraButton}>
            <Ionicons name="camera" size={20} color="#FF4459" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.sendButton}>
          <Ionicons name="send" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default pChat;

const styles = StyleSheet.create({
  messageContainer: {
    maxWidth: '70%',
    borderRadius: 22,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    
    
  },
  profilePhoto: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  messageText: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'left',
  },
  timeText: {
    color: '#666666',
    fontSize: 12,
    marginTop: 5,
    marginHorizontal: 55,
  },
  bottomNavbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 13,
    marginRight: 10,
    marginLeft:10,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    
  },
  cameraButton: {
    position: 'absolute',
    top: '50%',
    right: 25,
    transform: [{ translateY: -10 }],
  },
  sendButton: {
    backgroundColor: '#FF4459',
    borderRadius: 20,
    padding: 10,
    marginRight: 5,
  },
});