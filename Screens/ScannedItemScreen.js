import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView,Modal,Dimensions, } from "react-native";
import { Camera } from "expo-camera";
import Button from "../Components/Button";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const height = Dimensions.get('screen').height;

const ScannedItemScreen = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet scanned!");
  const [hasScanned, setHasScanned] = useState([]);

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  useEffect(() => {
    askForCameraPermission();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = navigation.addListener('blur', () => {
        setScanned(false);
      });
      return unsubscribe
    },[])
  )

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    setHasScanned([...hasScanned, data]);
    console.log("Type: ", type, "\ndata: ", data);

    AsyncStorage.setItem('scannedItems', JSON.stringify([...hasScanned, data]))
    .then(() => console.log('Scanned items saved successfully'))
    .catch(error => console.error('Error saving scanned items:', error));

  };

  if (hasPermission === null) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ textAlign: "center" }}>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>No access to camera</Text>
        <TouchableOpacity onPress={() => askForCameraPermission()}>
          <Text>Allow camera</Text>
        </TouchableOpacity>
      </View>
    );
  }
  

  return (
    <View style={{backgroundColor: "#E9EDF0", flex: 1, paddingTop: 20  }}>
 
      <View style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <View style={{ paddingBottom: 30 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20, paddingVertical: 20, textAlign: "center" }}>Place the QR code inside the area</Text>
          <Text style={{ fontSize: 14, textAlign: "center" }}>Scanning will start automatically</Text>
        </View>
        <View style={{ overflow: "hidden", borderRadius: 30 }}>
          <Camera onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={{ height: 200, width: 200 }} />  
        </View>
      </View>

      <View style={{ paddingHorizontal: 30, paddingVertical: 10 }}>
        

        {scanned && (
          <Modal>
            <ScrollView style={{position:"relative"}}>
          {hasScanned.map((item, index) => (
            <View key={index} style={{height:height,backgroundColor:"#E9EDF0"}}>

       <View style={{backgroundColor:"#4647AF",height:150,paddingHorizontal:30,}}>
       <Text style={{ fontSize: 17, paddingVertical: 20,fontWeight:"bold",paddingTop:40, color:"white"}}>Scanned Items</Text>
       </View>
              <View style={{backgroundColor:"white",marginHorizontal:30,borderRadius:8,padding:20,position:"absolute",right:0,left:0,top:100}}>
              <Text style={{ paddingVertical: 7 }}>{index + 1}.{item}</Text>
              <View style={{width:"100%",paddingTop:30}}>
              <Button title="Accept" backgroundColor="#4647AF" color='white'/>
              </View>
              </View>


            </View>
          ))}
        </ScrollView>
          </Modal>
        )}
      </View>
      
    </View>
  );
};

export default ScannedItemScreen;
