import React from 'react';
import {View,Text,ImageBackground} from 'react-native';


export default function PrommoDetails({title,image,name,price}) {
  return (
    <View style={{ borderRadius: 20, overflow: 'hidden'}}>
    <ImageBackground source={{ uri: image }} style={{width:350, height:150}}>
 <View>
    <View style={{}}>
    <Text style={{color:"white",fontWeight:700,textAlign:"center"}}>{title}</Text>
    </View>
    
 </View>
 </ImageBackground>
 </View>
  );
}
