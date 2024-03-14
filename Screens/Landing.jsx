import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Button from '../Components/Button'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const Landing = () => {
  return (
    <>
    <View style={{backgroundColor:"#2D2E9B", height:height, width:width, alignItems:"center", padding:20, gap:20}}>
        <View style={{flexDirection:"row",  marginTop:15}}>
            <Image source={require('../assets/LOGO.jpg')} style={{height:40, width:95}}/>
            {/* <Text style={{color:"white", fontWeight:450, }}>SKIP</Text> */}
        </View>
    <View style={{ padding:15 }}>
        <Image source={require('../assets/img4.png')} style={{height:240, width:240,}}/>
    </View>
    <View style={{alignItems:"center", justifyContent:"center", gap:30, paddingBottom:7, }}>
      <Text style={{textAlign:"center", color:"white", fontWeight:"bold", fontWeight:"500", fontSize:19}}>Easy Top up & Withdraw</Text>
      <Text style={{textAlign:"center", color:"white", fontSize:16, padding:10}}>Enjoy your money after withdrawing. You can buy yourself a chicken wing or a good snack! You can buy yourself a chicken wing or a good snack!</Text></View>
    <View style={{flexDirection:"column", gap:20,width:"100%"}}>
    <Button title="Sign In" backgroundColor="#FFBD68" color='white' />
    
    <Button title="Register Now" backgroundColor="transparent" color='white' borderWidth={1} borderColor={"white"} width={700}  />
</View>
      
    </View>
    </>
  )
}

export default Landing