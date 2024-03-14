import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import History from "../Screens/History";
import Deal from "../Screens/deals";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Scanner from "../Screens/Scanner";

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="History"
        component={History}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#2c2f99",
          tabBarInactiveTintColor: "#cecddf",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="history"
              size={25}
              color={focused ? "#2c2f99" : "#cecddf"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Scan"
        component={Scanner}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#2c2f99",
          tabBarInactiveTintColor: "#cecddf",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={25}
              color={focused ? "#2c2f99" : "#cecddf"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Deal"
        component={Deal}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#2c2f99",
          tabBarInactiveTintColor: "#cecddf",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="pricetag-sharp"
              size={25}
              color={focused ? "#2c2f99" : "#cecddf"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
