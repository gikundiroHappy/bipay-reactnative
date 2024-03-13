import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'

export const height = Dimensions.get('window').height
export const width = Dimensions.get('window').width
// #2D2E9B

  const Pagination1 = () => {
  return (
    <>
    <View style={{backgroundColor:"#3F40AA", height:height, width:width,  alignItems:"center", padding:20, gap:70}}>
        <View style={{flexDirection:"row", gap:245, marginTop:20 }}>
            <Image source={require('../assets/LOGO.jpg')} style={{height:40, width:95}}/>
            <Text style={{color:"white", fontWeight:450, }}>SKIP</Text>
        </View>
        <Image source={require('../assets/img1.png')} style={{height:240, width:240}}/>
    
    <View style={{alignItems:"center", justifyContent:"center", gap:30}}><Text style={{textAlign:"center", color:"white", fontWeight:500, fontSize:19}}>Easy Top up & Withdraw</Text>
      <Text style={{textAlign:"center", color:"white", fontSize:16}}>Enjoy your money after withdrawing. You can buy yourself a chicken wing or a good snack! Enjoy your money after withdrawing. You can buy yourself something!
      </Text>
      </View>
      
    </View>
    </>
  )
}

export default Pagination1