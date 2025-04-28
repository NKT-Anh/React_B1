// navigation/RootNavigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DangNhap from './DangNhap';
import DangKy from './src/Buoi3/DangKy';
import ForgetPassword from './src/Buoi3/forgetPassword';
import ProfileScreen from './src/Buoi4/ProfileScreen';
import HomeScreen from './src/Buoi4/HomeScreen';
import DrawerScreen from './src/Buoi4/DrawerScreen';
import DetailScreen from './src/Buoi4/DetailScreen';
const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DrawerScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="DangKy" component={DangKy} />
        <Stack.Screen name="DangNhap" component={DangNhap} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DrawerScreen" component={DrawerScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
