import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import SlideItem from '../Components/SlideItem'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const Pagination3 = ({navigation}) => {
  return (
    <View style={{backgroundColor:"#2D2E9B", height:height, width:width, alignItems:"center", padding:20,}}>
    <View style={{flexDirection:"row", gap:245, marginTop:20}}>
        <Image source={require('../assets/LOGO.jpg')} style={{height:40, width:95}}/>
        <Text style={{color:"white", fontWeight:400, }} onPress={()=> navigation.navigate('history')}>SKIP</Text>
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

export default Pagination3