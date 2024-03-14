import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import { slides } from '../data/slides'
import SlideItem from './SlideItem'
import Carousel, {Pagination} from 'react-native-snap-carousel';


const Slider = ({image, leftText, bodyImg, title, description }) => {
  return (
    <SafeAreaView>
       
    <View style={{backgroundColor:"#3F40AA", height:height, width:width,  alignItems:"center", padding:20, gap:70}}>
        <View style={{flexDirection:"row", gap:245, marginTop:20 }}>
            {image}
            <Text style={{color:"white", fontWeight:400, }}>{leftText}</Text>
        </View>
        {bodyImg}
    
    <View style={{alignItems:"center", justifyContent:"center", gap:30}}><Text style={{textAlign:"center", color:"white", fontWeight:500, fontSize:19}}>{title}</Text>
      <Text style={{textAlign:"center", color:"white", fontSize:16}}>{description}
      </Text>
      </View>
      
    </View>
    
    </SafeAreaView>
  )
}

export default Slider