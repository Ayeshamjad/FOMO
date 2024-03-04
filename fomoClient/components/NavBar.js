// Navbar.js

import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const NavBar = () => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome5 name="home" size={24} color="gray" />
        <Text style={styles.label}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome5 name="calendar-alt" size={24} color="" />
        <Text style={styles.label}>Events</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome5 name="plus" size={24} color="gray" />
        <Text style={styles.label}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome5 name="comments" size={24} color="gray" />
        <Text style={styles.label}>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome5 name="user" size={24} color="gray" />
        <Text style={styles.label}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 70,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: 'gray',
    marginTop: 4,
    fontSize: 12,
  },
};

export default NavBar;
