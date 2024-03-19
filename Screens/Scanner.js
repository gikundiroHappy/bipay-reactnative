import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView,Modal } from "react-native";
import { Camera } from "expo-camera";
import Button from "../Components/Button";
import QRCode from "react-native-qrcode-svg";
import { useFocusEffect, useNavigation } from '@react-navigation/native';



const Scanner = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet scanned!");
  const [hasScanned, setHasScanned] = useState([]);
  const [generatedQRCode, setGeneratedQRCode] = useState(null);

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
  };

  const generateQRCode = () => {
    const concatenatedText = hasScanned.join(", ");
    setGeneratedQRCode(concatenatedText); 
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
    <View style={{ backgroundColor: "#E9EDF0", flex: 1, paddingTop: 20 }}>
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
        <Text style={{ fontSize: 17, paddingVertical: 20 }}>Scanned Items:</Text>
        <ScrollView style={{ height: 190 }}>
          {hasScanned.map((item, index) => (
            <View key={index}>
              <Text style={{ paddingVertical: 7 }}>{index + 1}.{item}</Text>
            </View>
          ))}
        </ScrollView>
        {scanned && (
          <View style={{ paddingTop: 15, display: "flex", flexDirection: "row", justifyContent: "space-between", gap: 10 }}>
            <View style={{ flex: 1 }}>
              <Button title="Scan Again" backgroundColor="#2c2f99" color="white" onPress={() => setScanned(false)} />
            </View>
            <View style={{ flex: 1 }}>
              <Button title="Get QR code" backgroundColor="#2c2f99" color="white" onPress={generateQRCode} />
            </View>
          </View>
        )}
      </View>

      {generatedQRCode && (
        <Modal transparent={true} visible={!!generatedQRCode} animationType="fade">
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.7)", justifyContent: "center", alignItems: "center" }}>
          <View style={{ backgroundColor: "#fff", padding: 40, borderRadius: 10 }}>
            <QRCode value={generatedQRCode} size={250} />
            <TouchableOpacity onPress={() => setGeneratedQRCode(null)} style={{ marginTop: 20 }}>
              <Text style={{ textAlign: "center", color: "#2c2f99" }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      )}
    </View>
  );
};

export default Scanner;
