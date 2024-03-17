
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import History from '../Screens/History';

import Profile from '../Screens/profile';
import BottomNav from './BottomNav';
import PaginationOne from '../Screens/PaginationOne';
import PaginationTwo from '../Screens/PaginationThree';
import PaginationThree from '../Screens/PaginationTwo.js';
import SlideItems from '../Components/SlideItem';
import Landing from '../Screens/Landing'


const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>


      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name='slide' component={SlideItems} options={{headerShown:false}}/>
        <Stack.Screen name='PageOne' component={PaginationOne} options={{headerShown:false}}/>
        <Stack.Screen name='PageTwo' component={PaginationTwo} options={{headerShown:false}}/>
        <Stack.Screen name='Pagethree' component={PaginationThree} options={{headerShown:false}}/>
        <Stack.Screen name='Landing' component={Landing} options={{headerShown:false}}/>



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
