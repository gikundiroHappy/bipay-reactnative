

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import StackNavigation from './Navigation/StackNav';


export default function App() {
  return (
    <View style={styles.container}>


      <StackNavigation />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1
  },
});
