import React from "react";
import { View,Text,ImageBackground, ScrollView } from "react-native";
import MaterialIcons from  'react-native-vector-icons/MaterialIcons';

export default function Pics({description,image,date,name}){
    return(
        <View style={{padding:25}}>
            {/* <ScrollView> */}
            <ImageBackground source={{uri:image}} style={{width:350,height:180,borderTopLeftRadius:15,borderTopRightRadius:15,overflow:'hidden'}}>
     
            </ImageBackground>
            
            <View style={{display:'flex',flexDirection:'row',backgroundColor:'#FFFFFF',justifyContent:'space-between',width:350,padding:10,borderBottomLeftRadius:15,borderBottomRightRadius:15,overflow:'hidden'}}>
            <View style={{display:'flex',flexDirection:'row'}}>
            < MaterialIcons name="watch-later" size={25} color={'blue'} style={{marginTop:2,}}/>
            <View style={{display:'flex',flexDirection:'column',marginLeft:10}}>
                <Text style={{color:'#DFDFDF'}}>{description}</Text>
                <Text style={{color:'#747374',fontWeight:'bold'}}>{date}</Text>
                </View>
                </View>
                <View style={{backgroundColor:'#EEEEFE',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:8,paddingHorizontal:15}}>
                <Text style={{color:'#ACA8DB',fontWeight:'bold'}}>{name}</Text>
                </View>
            </View>
            {/* </ScrollView> */}
         </View>
    );
}