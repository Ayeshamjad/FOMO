import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

import HomeScreen from './Screens/HomeScreen';
import OnBoardingV1 from './Screens/OnBoardingV1';
import Signin from './Screens/Signin';
import Signup from './Screens/Signup';
import ForgotPass from './Screens/ForgotPass';
import VerifyOtp from './Screens/VerifyOtp';
import ConfirmPass from './Screens/ConfirmPass';
import Profile from './Screens/Profile';
import profileLocation from './Screens/profileLocation';
import Sucess from './Screens/profileSucessRegistered';
import Preference from './Screens/preference';
import MapScreen from './Screens/MapScreen';
import home from './Screens/HomeScreen';
import NotificationScreen from './Screens/NotificationScreen';


const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ForgotPass" component={ForgotPass} />
        <Stack.Screen name="OnBoardingV1" component={OnBoardingV1} />
        <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
        <Stack.Screen name="confirmPass" component={ConfirmPass} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="profileLocation" component={profileLocation} />
        <Stack.Screen name="Sucess" component={Sucess} />
        <Stack.Screen name="Preference" component={Preference} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        {/* <Stack.Screen name="home" component={home} /> */}
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
