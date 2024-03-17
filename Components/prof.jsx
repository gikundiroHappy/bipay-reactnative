import React from "react";
import { View,Text,ImageBackground, ScrollView } from "react-native";
import MaterialIcons from  'react-native-vector-icons/MaterialIcons';

export default function Set({icon,name,icons}){

    return(
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'',backgroundColor:'#FFFFFF',marginTop:10,padding:12
        ,borderRadius:7,width:'100%'}}>
         <View style={{display:'flex',flexDirection:'row',gap:10}}>
       <Text style={{fontSize: 20}}>{icon}</Text>
       <Text>{name}</Text>
       </View>

       <MaterialIcons name='keyboard-arrow-right'  size={20} color={'#DBDBDB'} />
        </View>
    )
}