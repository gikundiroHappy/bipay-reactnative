import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const Landing = () => {
  return (
    <>
    <View style={{backgroundColor:"#3F40AA", height:height, width:width, justifyContent:"space-around", alignItems:"center", padding:20}}>
        <View style={{flexDirection:"row",  marginBottom:70}}>
            <Image source={require('../assets/LOGO.jpg')} style={{height:40, width:95}}/>
            {/* <Text style={{color:"white", fontWeight:450, }}>SKIP</Text> */}
        </View>
    <View style={{backgroundColor:"#2D2E9B", height:240, width:240, borderRadius:"100%", alignItems:"center", justifyContent:"center" }}>
        <Image source={require('../assets/mag4.jpg')} style={{height:190, width:200, borderRadius:22}}/>
    </View>
    <View style={{alignItems:"center", justifyContent:"center", gap:30}}><Text style={{textAlign:"center", color:"white", fontWeight:"bold"}}>Easy Top up & Withdraw</Text>
      <Text style={{textAlign:"center", color:"white"}}>Enjoy your money after withdrawing. You can buy yourself a chicken wing or a good snack</Text></View>
    <View style={{flexDirection:"column", gap:20}}>
<TouchableOpacity style={{height:50, width:350, backgroundColor:"yellow", borderRadius:8}}></TouchableOpacity>
<TouchableOpacity style={{height:50, width:350, backgroundColor:"transparent", borderWidth:1, borderRadius:8 }}></TouchableOpacity>
</View>
      
    </View>
    </>
  )
}

export default Landing