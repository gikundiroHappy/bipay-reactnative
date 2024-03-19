
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import History from '../Screens/History'
import BottomNav from './BottomNav';
import Deal from '../Screens/deals';
import Profile from '../Screens/profile';
import Settings from '../Screens/settings';
import Cards from '../Screens/mycard';
import Topup from '../Screens/top';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName='top'>
        <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='register' component={Register} options={{ headerShown: false }} />
        <Stack.Screen name='history' component={BottomNav} options={{ headerShown: false }} />
        <Stack.Screen name='deal' component={BottomNav} options={{ headerShown: false }} />
       <Stack.Screen name='settings' component={Settings} options={{headerShown:false}}/>
        < Stack.Screen name='profile' component={BottomNav} options={{headerShown:false}}/>
        <Stack.Screen name='mycard' component={Cards} options={{headerShown:false}}/>
        <Stack.Screen name='top' component={Topup} options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
