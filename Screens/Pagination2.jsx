import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import SlideItem from '../Components/SlideItem'


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

 const Pagination2 = ({navigation}) => {
  return (
    <View style={{backgroundColor:"#2D2E9B", height:height, width:width, alignItems:"center", padding:20, gap:70 }}>
        <View style={{flexDirection:"row", gap:245, marginTop:20}}>
            <Image source={require('../assets/LOGO.jpg')} style={{height:40, width:95}}/>
            <Text style={{color:"white", fontWeight:400, }} onPress={()=> navigation.navigate('history')}>SKIP</Text>
        </View>
        <Image source={require('../assets/img2.png')} style={{height:240, width:240}}/>
    
    <View style={{alignItems:"center", justifyContent:"center", gap:30}}>
      <Text style={{textAlign:"center", color:"white", fontWeight:500, fontSize:19}}>Easy Payment</Text>
      <Text style={{textAlign:"center", color:"white", fontSize:16}}>Pay what you just with just a camera scan, without waiting in a queue👌! Pay what you just with just a camera scan, without waiting in a queue👌!</Text>
    </View>
      
    </View>
  )
}

export default Pagination2
