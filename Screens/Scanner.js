import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Camera } from "expo-camera";
import Button from "../Components/Button";

const Scanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet scanned!");

  
  const askForCameraPermission = () => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  useEffect(() => {
    askForCameraPermission();
  }, []);

 
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    console.log("Type: ", type, "\ndata: ", data);
  };

  
  if (hasPermission === null) {
    return <View style={{justifyContent:'center', alignItems:'center'}}>
        <Text style={{textAlign: 'center',}}>Requesting for camera permission</Text>
        </View>;
  }
  if (hasPermission === false) {
    return (
      <View style={{alignItems: 'center',
      justifyContent: 'center',}}>
        <Text>No access to camera</Text>
        <TouchableOpacity onPress={() => askForCameraPermission()}>
          <Text>Allow camera</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    
    <View style={{  flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
     }}>
      
      <View style={{ alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
}}>
        <Camera
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{height:400, width:400}}
        />
        </View>
        
        <Text style={{ fontSize: 16, padding:15, color:"blue" }}>{text}</Text>
        {scanned && (
        
          <Button title= 'Scan Again' backgroundColor='#2c2f99' color='white' onPress={() => setScanned(false)}/>
        )}
      
    </View>
  );
};

export default Scanner;

const styles = StyleSheet.create({});
