import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,Dimensions, Image,KeyboardAvoidingView,Platform, ScrollView } from 'react-native';
import StandardTextInput from '../Components/StandardTextInput';
import Button from '../Components/Button';
import { useState } from 'react';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Login() {
  const [email,setEmail]=useState('')
  const [emailError,setEmailError]=useState('')
  const [password,setPassword]=useState('')
  const [passwordError,setPasswordError]=useState('')

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}
  
  const HandleValidation=()=>{
    let valid = true;
    if(email.trim() === ''){
      setEmailError('Email is required')
      let valid = false;
    }else if(!isValidEmail(email)){
      setEmailError('Your email is not valid')
      let valid = false;
    }else{
      setEmailError('')
    }

    if (password.trim() === '') {
      setPasswordError('Password is required')
      valid = false
  } else {
      setPasswordError('')
  }
    return valid;
  }

  const HandleLogin =()=>{
    if(HandleValidation()){
console.log("logged in")
    }
  }

  return (
    <KeyboardAvoidingView enabled  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    
      <ScrollView>
      <View style={styles.container}>
      <StatusBar style="auto"/>
      <View style={{backgroundColor:"#4647AF",height:200,}}>
      </View>
      <View style={{position:"absolute",display:"flex",top:100,right:0,left:0,display:"flex",flexDirection:"row",justifyContent:"center"}}>
      <View style={{backgroundColor:"#FFFFFF",borderRadius:10,width:350,padding:30}}>
        <Text style={{fontWeight:"bold",textAlign:"center",fontSize:20,color:"#3F3F3F",padding:15}}>Login</Text>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"center",}}>
          <Image source={require('../assets/login.png')} style={{ width: 80, height: 130 }}/>
        </View>
        <View>
        <Text style={{fontWeight:"bold",textAlign:"center",fontSize:14,color:"#B8B8B8",padding:30}}>Type Email and Password to continue</Text>
        </View>
        <View style={{}}>
        <StandardTextInput 
        label="Email" 
        icon="email-outline" 
        value={email} 
        onChangeText={setEmail} 
        error={emailError}
        />
         {emailError?(<Text style={{color:"red", paddingVertical:4,height:30}}>{emailError}</Text>):null}
          <StandardTextInput 
          label='Password'
          icon='eye'
          secureTextEntry
          style={{marginTop:20}}
          value={password} 
        onChangeText={setPassword} 
        error={passwordError}
          />
            {passwordError?(<Text style={{color:"red", paddingVertical:2,height:30}}>{passwordError}</Text>):null}
        </View>
        <View style={{marginTop:20}}>
        <Button title="Sign in" backgroundColor="#4647AF" color='white' onPress={HandleLogin}/>
        </View>
      </View>
      </View>
      </View>
      </ScrollView>
    
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    width:width,
    backgroundColor:"#E9EDF0",
    position:"relative",
    height:height,
  },
});
