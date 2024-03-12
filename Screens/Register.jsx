import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import { TextInput } from "react-native-paper";
import React from "react";
import { FontAwesome5 } from '@expo/vector-icons';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const Register = () => {
  return (
    <>
      <View
        style={{
          backgroundColor: "#EFF5F9",
          height: height,
          width: width
        }}
      >
        <View style={{
          backgroundColor: "#3F40AA",
          width:width,
          height:"40%",
          padding:20
        }}>
            <View style={{
          backgroundColor: "#FFFFFF",
          width:"60",
          height:"190%",
          marginTop:30,
          gap:20,
          justifyContent:"center",
          alignItems:"center",
          marginTop:50,
          borderRadius:10
          
        }}>
            <Text style={{textAlign:"center", fontSize:20, fontWeight:"500"}}>Register</Text>
            <Image source={require('../assets/phone.jpg')} style={{height:110, width:70}}/>
            <Text style={{color:"grey"}}>Input phone number to continue the registration</Text>
            <TextInput style={{width:320, alignSelf:"center", backgroundColor:"transparent"}}
            placeholderTextColor="grey"
            keyboardType="numeric"
            

            left={<TextInput.Icon icon="flag" color="blue" />}
            placeholder="+1      +123 456 789"
            />

            <TouchableOpacity
          style={{
            height: 50,
            width: 320,
            backgroundColor: "#3F40AA",
            borderWidth: 1,
            borderRadius: 8,
            alignSelf:"center"
          }}
        ></TouchableOpacity>
        </View>

        
        </View>
      </View>
    </>
  );
};

export default Register;
