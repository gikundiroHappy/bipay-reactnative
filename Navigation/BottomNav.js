import { View, Text } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import History from '../Screens/History'
import Deal from '../Screens/deals'
import Profile from '../Screens/profile'

const Tab = createBottomTabNavigator()

const BottomNav = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen  name='History' component={History}/>
        <Tab.Screen name='Deal' component={Deal}/>
        < Tab.Screen name='Profile' component={Profile}/>
    </Tab.Navigator>
  )
}

export default BottomNav