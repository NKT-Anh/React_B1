import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Todo from './src/Buoi5/Todo';
import TodoDetail from './src/Buoi5/TodoDetail';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Todo">
                <Stack.Screen name="Todo" component={Todo} />
                <Stack.Screen name="TodoDetail" component={TodoDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}