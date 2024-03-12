import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,Dimensions, Image } from 'react-native';
import StandardTextInput from '../Components/StandardTextInput';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Verification() {
  return (
    <SafeAreaView>
    <View style={styles.container}>
     
      <StatusBar style="auto" backgroundColor="#4041AC" />
      <View style={{backgroundColor:"#4647AF",height:200,}}>
      </View>
      <View style={{position:"absolute",display:"flex",top:60,right:0,left:0,display:"flex",flexDirection:"row", alignContent:"center",justifyContent:"center"}}>
      <View style={{backgroundColor:"#FFFFFF",borderRadius:10,width:350,paddingBottom:20}}>
        <Text style={{fontWeight:"bold",textAlign:"center",fontSize:20,color:"#3F3F3F",padding:20}}>Verification</Text>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"center",}}>
          <Image source={require('../assets/verify.png')}/>
        </View>
        <View>
        <Text style={{fontWeight:"bold",textAlign:"center",fontSize:16,color:"#B8B8B8",padding:30}}>Please enter the code was sent in your phone number</Text>
        </View>
        <View style={{display:"flex",flexDirection:"row",gap:10,justifyContent:"center"}}>
          <StandardTextInput style={styles.textinput} keyboardType='numeric'/>
          <StandardTextInput style={styles.textinput} keyboardType='numeric'/>
          <StandardTextInput style={styles.textinput} keyboardType='numeric'/>
          <StandardTextInput style={styles.textinput} keyboardType='numeric'/>
        </View>
      </View>
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width:width,
    backgroundColor:"#E9EDF0",
    position:"relative",
    height:height,
  },
  textinput:{
    width:5,
    backgroundColor:"red"
  }
});
