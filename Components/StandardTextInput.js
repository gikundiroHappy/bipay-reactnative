import React from "react";
import { StyleSheet, View, } from "react-native";
import { TextInput } from "react-native-paper";

const StandardTextInput = ({ label,value, onChangeText,icon,secureTextEntry,error,keyboardType,onPress,}) => {
  return (
    <View>
    <TextInput 
    label={label} 
    value={value} 
    onChangeText={onChangeText} 
    secureTextEntry={secureTextEntry} 
    error={error} 
    keyboardType={keyboardType}
    style={styles.textInput} 
    underlineColor='white' 
    textColor='black'
    theme={{colors:{primary:"#CECFD7"}}}
    right={<TextInput.Icon size={19} icon={icon} color="#CECFD7" onPress={onPress}></TextInput.Icon>}
    />
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: { 
   height: 50,
   fontSize:15,
   borderRadius:5,
   borderWidth:1,
   borderColor:"#CECFD7",
   backgroundColor:"white",
   marginTop:10,
  },
});

export default StandardTextInput;
