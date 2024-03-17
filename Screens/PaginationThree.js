import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function PaginationThree({navigation}){

  return (
    <View style={{backgroundColor:"#3D3DA8", height:height, width:width, alignItems:"center", padding:20,gap:50}}>
    <View style={{flexDirection:"row", gap:245, marginTop:20}}>
        <Image source={require('../assets/LOGO.jpg')} style={{height:40, width:95}}/>
        <TouchableOpacity onPress={()=> navigation.navigate('landing')}><Text style={{color:"white", fontWeight:400, }}>SKIP</Text></TouchableOpacity>
    </View>
    <View style={{padding:20}}>
    <Image source={require('../assets/img3.png')} style={{height:240, width:240, }}/>
    </View>


<View style={{alignItems:"center", justifyContent:"center", gap:30, padding:20}}>
  <Text style={{textAlign:"center", color:"white", fontWeight:"500", fontSize:19}}>Shopping Online</Text>
  <Text style={{textAlign:"center", color:"white", fontSize:16}}>Buy anything online, without waiting in a queue👌! Buy anything online, without waiting in a queue👌</Text>
</View>
  
</View>
  )
}
