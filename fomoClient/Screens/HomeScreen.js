import React from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NavBar from '../components/navbar';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Your main content goes here */}
      <Text>Main Content</Text>

      {/* Include the Navbar component */}
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});


export default HomeScreen;
