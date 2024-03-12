import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
function Payment() {
  return (
    <View style={styles.maincontainer}>
    <View style={styles.container}>
    <FontAwesomeIcon icon={faChevronLeft} style={styles.icon} size={20} />
     <Text style={styles.maintext}>Electricity Payment</Text>
    </View>
    <View style={styles.container2}>
    <Text style={styles.text1}>Choose Payment methode</Text>
   <View style={styles.card}>
  <Image source={require('../assets/pay.png')} style={styles.logo} />
  <View style={{ justifyContent: 'center' }}>
    <Text style={styles.text2}>Balance</Text>
    <Text style={styles.additionalText}>$1000</Text>
  </View>
</View>
</View>
    <View style={styles.container3}>
<Text style={styles.text1}>Transanction details</Text>
<View style={styles.cardd}>
  <Image source={require('../assets/elec.png')} style={styles.logoo} />
  <View style={{ justifyContent: 'center' }}>
    <Text style={styles.text8}>Electricity A</Text>
    
  
  </View>
  <View>
  <View style={styles.text4}>
    <Text  style={styles.text5}>Customer name</Text>
    <Text style={styles.text6}>James Ronald</Text>

    </View>
    <View style={styles.text4}>
    <Text  style={styles.text7}>Customer ID</Text>
    <Text style={styles.text9}>43725763-345</Text>

    </View>
    </View>
</View>
    </View>
   
    </View>
  );
}

const styles = StyleSheet.create({
text4:{
 flexDirection:'row',
 gap:30,
 top:90,
 right:150,
},
text5:{
fontWeight:'bold',

},
text7:{
  fontWeight:'bold',
  top:20,
  
  },
  text9:{
   top:20,
  },
  additionalText: {
    color: 'gray',
    fontSize: 13,
    marginTop: 5, 
    top:2,
  },
  logo:{
  top:8,
  width:35,
  height:30,
  },
  logoo:{
    top:8,
    width:60,
    height:60,
      },
  maincontainer: {
   
    flex: 1,
    backgroundColor:'E9EDF0',
    
  },
  text3:{
    color:'black',
    fontWeight:'bold',
    fontSize:16,
      },
  cardd:{
    padding:13,
    backgroundColor:'white',
    width:350,
    height:200,
    borderRadius:10,
    top:20,
    shadowColor: '#000',
    flexDirection:'row',
    gap:10,
    shadowOffset: {
      width: 20,
      height: 10,
    
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
    
      },
  text2:{
color:'black',
fontWeight:'bold',
fontSize:16,
  },
  text8:{
    color:'black',
    fontWeight:'bold',
    fontSize:16,
    bottom:50,
  },
  card:{
  padding:13,
  backgroundColor:'white',
  width:350,
  height:90,
  borderRadius:10,
  top:20,
  shadowColor: '#000',
  flexDirection:'row',
  gap:10,
shadowOffset: {
  width: 20,
  height: 10,

},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5

  },
  container2:{
paddingHorizontal:30,
top:15,
  },
  container3:{
    paddingHorizontal:30,
    top:70,
      },
  text1:{
fontWeight:'bold',
fontSize:20,
  },
  icon:{
color:'white',

  },
  container: {
    backgroundColor: '#3C3CA7',
    width:400,
    height:90,
   flexDirection:'row',
   paddingHorizontal:40,
   gap:20,
   justifyContent:'left',
   alignItems:'center'
    
  },
  maintext:{
    color:'white',
    fontSize:22,
    fontWeight:'bold'

  }
});

export default Payment;
