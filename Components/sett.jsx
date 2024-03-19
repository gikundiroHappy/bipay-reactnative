import React from "react";
import { View,Text,ImageBackground, ScrollView } from "react-native";
import MaterialIcons from  'react-native-vector-icons/MaterialIcons';

export default function Setco({icon,name,icons}){

    return(
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:50,backgroundColor:'#FFFFFF',marginTop:10,padding:12
        ,borderRadius:7,width:'100%'}}>
         <View style={{display:'flex',flexDirection:'row',gap:10}}>
       <Text style={{fontSize: 30}}>{icon}</Text>
       <Text>{name}</Text>
       </View>
       <Text style={{ fontSize:30}} >{icons}</Text>
        </View>
    )
}