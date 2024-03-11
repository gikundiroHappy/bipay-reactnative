import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

 const Pagination2 = () => {
  return (
    <View style={{backgroundColor:"#3F40AA", height:height, width:width, justifyContent:"space-around", alignItems:"center", padding:20}}>
        <View style={{flexDirection:"row", gap:245, marginBottom:70}}>
            <Image source={require('../assets/LOGO.jpg')} style={{height:40, width:95}}/>
            <Text style={{color:"white", fontWeight:450, }}>SKIP</Text>
        </View>
    <View style={{backgroundColor:"#2D2E9B", height:240, width:240, borderRadius:"100%", alignItems:"center", justifyContent:"center" }}>
        <Image source={require('../assets/mag2.jpg')} style={{height:170, width:215, borderRadius:22}}/>
    </View>
    <View style={{alignItems:"center", justifyContent:"center", gap:30}}><Text style={{textAlign:"center", color:"white", fontWeight:"bold"}}>Easy Payment</Text>
      <Text style={{textAlign:"center", color:"white"}}>Pay what you just with just a camera scan, without waiting in a queue👌!</Text></View>
      
    </View>
  )
}

export default Pagination2
