import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function Received() {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <FontAwesomeIcon icon={faChevronLeft} style={styles.icon} size={20} />
        <Text style={styles.maintext}>Receive Money</Text>
      </View>
      <View style={styles.backgroundContainer}>
        <View style={styles.contentContainer}>
        <Image source={require('../assets/qr.png')} style={styles.imagee} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
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
    paddingHorizontal: 40,
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
    height: 300,
    width: '80%',
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
