import React from 'react';
import { StyleSheet, Text, View ,Image, Dimensions} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell, faChevronLeft ,faChevronRight} from '@fortawesome/free-solid-svg-icons';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
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
    <View style={styles.textbalance}> 
    <Text style={{fontWeight:'bold',fontSize:15}}>Balance</Text>
    <Text style={{fontWeight:'bold',fontSize:12, color:'#B8B8B8'}}>$324.999</Text>
 
    </View>
 
    <FontAwesomeIcon icon={faChevronRight} style={{color:'#B8B8B8', left:150,top:20, }} size={13} />
    </View>
  
    <Text style={styles.text1}>Transaction Details</Text>
 
 <View style={styles.cardd}>
 <View style={{flexDirection:'row'}}> 
 <Image source={require('../assets/elec.png')} style={{ width:60,height:60,}} />
 <Text style={{fontWeight:'bold',fontSize:15, top:15}}>Electricity A</Text>
 </View>

 <View style={{ flexDirection:'row', gap:70, left:12,top:4}}> 
    <Text style={{fontWeight:'bold',fontSize:15}}>Customer Name</Text>
    <Text style={{fontWeight:'bold',fontSize:13, color:'#B8B8B8',top:2}}>James Ronald</Text>
    </View>
    <View style={{ flexDirection:'row', gap:98, left:12,top:4}}> 
    <Text style={{fontWeight:'bold',fontSize:15}}>Customer ID</Text>
    <Text style={{fontWeight:'bold',fontSize:13, color:'#B8B8B8',top:2}}>39475-384</Text>
    </View>
    <View style={{ flexDirection:'row', gap:120, left:12,top:4}}> 
    <Text style={{fontWeight:'bold',fontSize:15}}>Address</Text>
    <Text style={{fontWeight:'bold',fontSize:13, color:'#B8B8B8',top:2}}>Kigali,Rwanda</Text>
    </View>
    <View style={{ flexDirection:'row', gap:130, left:12,top:4}}> 
    <Text style={{fontWeight:'bold',fontSize:15}}>Payment Cycle</Text>
    <Text style={{fontWeight:'bold',fontSize:13, color:'#B8B8B8',top:2}}>May</Text>
    </View>
    <View style={{ flexDirection:'row', gap:90, left:12,top:15}}> 
    <Text style={{fontWeight:'bold',fontSize:15}}>Electricity Amount</Text>
    <Text style={{fontWeight:'bold',fontSize:13, color:'#B8B8B8',top:2}}>$300.00</Text>
    </View>
    <View style={{ flexDirection:'row', gap:200, left:12,top:15}}> 
    <Text style={{fontWeight:'bold',fontSize:15}}>Tax</Text>
    <Text style={{fontWeight:'bold',fontSize:13, color:'#B8B8B8',top:2}}>$30.00</Text>
    </View>
    <View style={{ flexDirection:'row', gap:120, left:12,top:15}}> 
    <Text style={{fontWeight:'bold',fontSize:15}}>Transaction fee</Text>
    <Text style={{fontWeight:'bold',fontSize:13, color:'#B8B8B8',top:2}}>Free</Text>
    </View>
    <View style={{ flexDirection:'row', gap:170, left:12,top:30}}> 
    <Text style={{fontWeight:'bold',fontSize:15}}>TOTAL:</Text>
    <Text style={{fontWeight:'bold',fontSize:13, color:'black',top:2,}}>$330.00</Text>
    </View>
 </View>
</View>
    </View>
  );
}

const styles = StyleSheet.create({

  maincontainer: {
    flex: 1,
    flexDirection:'column',
    width:"100%",

  },
  container: {
    backgroundColor: '#3C3CA7',
    height:100,
    flexDirection:'row',
    paddingHorizontal:40,
    gap:20,
    justifyContent:'left',
    alignItems:'center'
    
  },
  container2:{
   
    backgroundColor: '#E1EBEE',
    height:650,
    paddingHorizontal:40,
    gap:20,
    justifyContent:'left',
  
  },
  logo:{
    width:35,
    height:35,
    top:10,
  },
  icon:{
    color:'white',
  },
 
  maintext:{
    color:'white',
    fontSize:22,
    fontWeight:'bold'

  },
 
  text1:{
    fontWeight:'bold',
    fontSize:20,
    top:10,
  },
  textbalance:{
    top:8,
  },
  cardd:{
    padding:13,
    backgroundColor:'white',
    width:320,
    height:380,
    borderRadius:10,
    top:5,
    shadowColor: '#000',
 
    gap:10,
    shadowOffset: {
          width: 10,
          height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
          
  },
  card:{
    padding:13,
    backgroundColor:'white',
    width:320,
    height:80,
    borderRadius:10,
    top:15,
    shadowColor: '#000',
    flexDirection:'row',
    gap:10,
    shadowOffset: {
          width: 10,
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
  additionalText: {
    color: 'gray',
    fontSize: 13,
    marginTop: 5, 
    top:2,
  },
         
 


});

export default Payment;
