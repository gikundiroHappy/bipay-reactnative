
import { View, Text,Dimensions,Image } from 'react-native'
import React from 'react'

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;


const SlideItem = ({item}) => {
  return (
    <View>
      <View style={{backgroundColor:"#3F40AA", height:height, width:width, justifyContent:"space-around", alignItems:"center", padding:20}}>
        <View style={{flexDirection:"row", gap:245, marginBottom:70}}>
            <Image source={item.img} resizeMode="contain" style={{height:40, width:95}}/>
            <Text style={{color:"white", fontWeight:450, }}>SKIP</Text>
        </View>
    <View style={{backgroundColor:"#2D2E9B", height:240, width:240, borderRadius:"100%", alignItems:"center", justifyContent:"center" }}>
        <Image source={require('../assets/img1.png')} style={{height:170, width:215, borderRadius:22}}/>
    </View>
    <View style={{alignItems:"center", justifyContent:"center", gap:30}}><Text style={{textAlign:"center", color:"white", fontWeight:"bold"}}>Easy Top up & Withdraw</Text>
      <Text style={{textAlign:"center", color:"white"}}>Enjoy your money after withdrawing. You can buy yourself a chicken wing or a good snack</Text></View>
      
    </View>
    </View>
  )
}

export default SlideItem