// navigation/RootNavigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DangNhap from './DangNhap';
import DangKy from './src/Buoi3/DangKy';
import ForgetPassword from './src/Buoi3/forgetPassword';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DangNhap" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="DangKy" component={DangKy} />
        <Stack.Screen name="DangNhap" component={DangNhap} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
