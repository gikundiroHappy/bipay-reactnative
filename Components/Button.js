import React from "react";
import { StyleSheet, View,TouchableOpacity,Text } from "react-native";

const Button = ({ title,onPress,backgroundColor,color,borderColor, borderWidth}) => {
  return (
    <View>
    <TouchableOpacity style={[styles.button,{backgroundColor,borderColor, borderWidth}]} onPress={onPress} >
    <Text style={[styles.btnText,{color}]}>{title}</Text>
    </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    padding: 17,
    alignItems: "center",
    borderRadius:5
  },
  btnText:{
    fontWeight:600
  }
});

export default Button;
