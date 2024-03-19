import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Dimensions, Image,KeyboardAvoidingView,Platform, ScrollView , TouchableOpacity} from 'react-native';
import StandardTextInput from '../Components/StandardTextInput';
import Button from '../Components/Button';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../FirebaseConfiguration';
import FlashMessage,{ showMessage, } from "react-native-flash-message";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function Register({navigation}) {
  const [email,setEmail]=useState('')
  const [emailError,setEmailError]=useState('')
  const [password,setPassword]=useState('')
  const [passwordError,setPasswordError]=useState('')
  const [verifyPassword,setVerifyPassword] = useState('')
  const [verifyPasswordError,setVerifyPasswordError] = useState('')

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

  if(verifyPassword.trim() === ''){
    setVerifyPasswordError("Verify password is required")
    valid = false;
  }else if(verifyPassword !== password){
    setVerifyPasswordError("Dont match with password")
    valid = false;
  }else {
    setVerifyPasswordError('')
  }


    return valid;
  }

  const HandleRegister =async()=>{
    if(HandleValidation()){
     
      
      try{
        const response = await createUserWithEmailAndPassword(FIREBASE_AUTH,email,password)
          showMessage({
            message: "you have signed up",
            hideStatusBar:true,
            type: "success",
            icon:"success",
            duration:6000
          });
          navigation.navigate('login')
        }catch (error){
          showMessage({
            message: error.code.toString(),
            hideStatusBar:true,
            type: "danger",
           duration:3000
          });
        }finally{
         setEmail('')
         setPassword('')
         setVerifyPassword('')
        }

    }
  }

  return (
    <KeyboardAvoidingView enabled  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <FlashMessage position="top" />
      <ScrollView>
      <View style={styles.container}>
      <StatusBar style="auto"/>
      <View style={{backgroundColor:"#4647AF",height:200,}}>
      </View>
      <View style={{position:"absolute",display:"flex",top:50,right:0,left:0,display:"flex",flexDirection:"row",justifyContent:"center"}}>
      <View style={{backgroundColor:"#FFFFFF",borderRadius:10,width:350,padding:30}}>
        <Text style={{fontWeight:"bold",textAlign:"center",fontSize:20,color:"#3F3F3F",padding:15}}>Register</Text>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"center",}}>
          <Image source={require('../assets/login.png')} style={{ width: 80, height: 130 }}/>
        </View>
        <View>
        <Text style={{fontWeight:"bold",textAlign:"center",fontSize:14,color:"#B8B8B8",padding:30}}>Input Email and Password to continue the registration</Text>
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

            <StandardTextInput 
          label='Confirm Passwordss'
          icon='eye'
          secureTextEntry
          style={{marginTop:20}}
          value={verifyPassword} 
        onChangeText={setVerifyPassword} 
        error={passwordError}
          />
           {verifyPasswordError?(<Text style={{color:"red", paddingVertical:2,height:30}}>{verifyPasswordError}</Text>):null}

        </View>
        <View style={{marginTop:20}}>
        <Button title="Sign in" backgroundColor="#4647AF" color='white' onPress={HandleRegister}/>
        <View style={{paddingVertical:10,display:"flex",flexDirection:"row", gap:10}}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('login')}>
        <Text style={{color:"#4647AF",fontWeight:"bold"}}>Login</Text>
        </TouchableOpacity>
        </View>
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