
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Register from '../Screens/Register';

import Settings from '../Screens/settings';
import Cards from '../Screens/mycard';
import Topup from '../Screens/top';
import BottomNav from './BottomNav';
import PaginationOne from '../Screens/PaginationOne';
import PaginationTwo from '../Screens/PaginationTwo';
import PaginationThree from '../Screens/PaginationThree';
import SlideItems from '../Components/SlideItem';
import Landing from '../Screens/Landing'
import Receive from '../Screens/Received'
import Payment from '../Screens/Payment'
import Sendmoney from '../Screens/SendMoney'

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>

     <Stack.Navigator initialRouteName='slide'>
        <Stack.Screen name='slide' component={SlideItems} options={{headerShown:false}}/>
        <Stack.Screen name='PageOne' component={PaginationOne} options={{headerShown:false}}/>
        <Stack.Screen name='PageTwo' component={PaginationTwo} options={{headerShown:false}}/>
        <Stack.Screen name='Pagethree' component={PaginationThree} options={{headerShown:false}}/>
        <Stack.Screen name='Landing' component={Landing} options={{headerShown:false}}/>
        
        <Stack.Screen name='receive' component={Receive} options={{headerShown:false}}/>
        <Stack.Screen name='payment' component={Payment} options={{headerShown:false}}/>
        <Stack.Screen name='sendmoney' component={Sendmoney} options={{headerShown:false}}/>

        <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='register' component={Register} options={{ headerShown: false }} />
        
        <Stack.Screen name='mycard' component={Cards} options={{headerShown:false}}/>
        <Stack.Screen name='settings' component={Settings} options={{headerShown:false}}/>
        <Stack.Screen name='top' component={Topup} options={{headerShown:false}}/>

        <Stack.Screen name='history' component={BottomNav} options={{ headerShown: false }} />
        <Stack.Screen name='deal' component={BottomNav} options={{ headerShown: false }} />
        < Stack.Screen name='profile' component={BottomNav} options={{headerShown:false}}/>
        <Stack.Screen name='scan' component={BottomNav} options={{ headerShown: false }} />
        <Stack.Screen name='home' component={BottomNav} options={{ headerShown: false }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
