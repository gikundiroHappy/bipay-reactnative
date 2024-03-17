
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import History from '../Screens/History'

import Profile from '../Screens/profile;
import BottomNav from './BottomNav';

import Deal from '../Screens/deals';
import Pagination1 from '../Screens/Pagination1';
import Pagination3 from '../Screens/Pagination3';
import Pagination2 from '../Screens/Pagination2';


const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='profile'>


      <Stack.Navigator initialRouteName='Pagination1'>
        <Stack.Screen name='Pagination1' component={Pagination1} options={{headerShown:false}}/>
        <Stack.Screen name='Pagination2' component={Pagination2} options={{headerShown:false}}/>
        <Stack.Screen name='Pagination3' component={Pagination3} options={{headerShown:false}}/>


        <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='register' component={Register} options={{ headerShown: false }} />
        <Stack.Screen name='history' component={History} options={{ headerShown: false }} />
        < Stack.Screen name='profile' component={Profile} options={{headerShown:false}}/>

        <Stack.Screen name='deal' component={BottomNav} options={{ headerShown: false }} />
        <Stack.Screen name='scan' component={BottomNav} options={{ headerShown: false }} />
        <Stack.Screen name='home' component={BottomNav} options={{ headerShown: false }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
