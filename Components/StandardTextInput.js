import React from "react";
import { StyleSheet, View, } from "react-native";
import { TextInput } from "react-native-paper";

const StandardTextInput = ({ label,value, onChangeText,icon,secureTextEntry,error,keyboardType,onPress}) => {
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
    theme={{colors:{primary:"#E0BF36"}}}
    right={<TextInput.Icon size={19} icon={icon} color="#E0BF36" onPress={onPress}></TextInput.Icon>}
    />
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: { 
   color: "#FFFFFF",
   fontWeight:700,
   fontSize:15,
   backgroundColor:"white",
   width:60,
   borderWidth:1,
   borderColor:"#EFEFEF"
  },
});

export default StandardTextInput;
