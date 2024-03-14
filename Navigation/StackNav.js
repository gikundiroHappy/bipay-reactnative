
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import History from '../Screens/History'

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='register' component={Register} options={{ headerShown: false }} />
        <Stack.Screen name='history' component={History} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
