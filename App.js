
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import StackNavigation from './Navigation/StackNav';
import SlideItem from './Components/SlideItem';

export default function App() {
  return (
    <View style={styles.container}>

      {/* <StackNavigation /> */}
      {/* <SlideItem/> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1
  },
});
