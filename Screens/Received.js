import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Button from '../Components/Button';

function Received({navigation}) {
  return (
  
  <View style={styles.maincontainer}>
  <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
    <FontAwesomeIcon icon={faChevronLeft} style={styles.icon} size={20} />
    </TouchableOpacity>
    <Text style={styles.maintext}>Receive Money</Text>
  </View>
  <View style={styles.backgroundContainer}>
    <View style={styles.contentContainer}>
      <Image source={require('../assets/qr.png')} style={styles.imagee} />
      <View style={styles.textContainer}>
        <Text style={{fontWeight:'bold'}}>083-987-3888</Text>
        <Text style={[styles.regularText, { textAlign: 'center' , color:'gray', top:25 ,}]}>Set the amount and send to your friend to receive money</Text>
        <View style={{top:55}}> 
        <Button title="Set Amount"
            backgroundColor="#3C3CA7"
            color="#ffffff"
            borderColor="#3C3CA7"
            borderWidth={2} />
        </View>
       
      </View>
    </View>
  </View>
</View>


  );
}

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    marginTop: 70, 
    paddingHorizontal:40,
  },
  maincontainer: {
    flexDirection: 'column',
  },
  imagee:{
top:60,
alignSelf:'center',
  },
  container: {
    backgroundColor: '#3C3CA7',
    height: 250,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  icon: {
    color: 'white',
    bottom:60,
  },
  maintext: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
    bottom:60,
  },
  backgroundContainer: {
    flex: 1,
    backgroundColor: '#3C3CA7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    backgroundColor: 'white',
    height: 390,
    width: '85%',
    top:50,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 20,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Received;
