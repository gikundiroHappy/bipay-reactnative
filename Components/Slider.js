import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import { slides } from '../data/slides'
import SlideItem from './SlideItem'

const Slider = () => {
  return (
    <SafeAreaView>
      <FlatList data={slides}
      renderItem={({item}) => <SlideItem item={item}/> }/>
    </SafeAreaView>
  )
}

export default Slider