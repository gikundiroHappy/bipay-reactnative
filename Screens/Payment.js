import React from 'react';
import { StyleSheet, Text, View ,Image, Dimensions, ScrollView} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell, faChevronLeft ,faChevronRight} from '@fortawesome/free-solid-svg-icons';
import Button from '../Components/Button';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
function Payment() {
  return (
    <View>

<ScrollView vertical showsVerticalScrollIndicator={false} >
    <View style={styles.maincontainer}>
    <View style={styles.container}>
    <FontAwesomeIcon icon={faChevronLeft} style={styles.icon} size={10} />
     <Text style={styles.maintext}>Electricity Payment</Text>
    </View>
    <View style={styles.container2}>
    <Text style={styles.text1}>Choose Payment methode</Text>
 
    <View style={styles.card}>
    <Image source={require('../assets/pay.png')} style={styles.logo} />
    <View style={styles.textbalance}> 
    <Text style={{fontWeight:'bold',fontSize:15,color:'#3D3D3D'}}>Balance</Text>
    <Text style={{fontWeight:'bold',fontSize:10, color:'#B8B8B8'}}>$324.999</Text>
 
    </View>
 
    <FontAwesomeIcon icon={faChevronRight} style={{color:'#B8B8B8', left:150,top:12, }} size={13} />
    </View>
  
    <Text style={{top:1, fontWeight:'bold',   fontSize:15,}}>Transaction Details</Text>
 
 <View style={styles.cardd}>
 <View style={{flexDirection:'row'}}> 
 <Image source={require('../assets/elec.png')} style={{ width:50,height:50,}} />
 <Text style={{fontWeight:'bold',fontSize:13, top:15}}>Electricity A</Text>
 </View>

 <View style={{ flexDirection:'row', gap:90, left:12,top:15}}> 
    <Text style={{fontWeight:'bold',fontSize:13,color:'#3D3D3D'}}>Customer Name</Text>
    <Text style={{fontWeight:'bold',fontSize:12, color:'#B8B8B8',top:2}}>James Ronald</Text>
    </View>
    <View style={{ flexDirection:'row', gap:126, left:12,top:15}}> 
    <Text style={{fontWeight:'bold',fontSize:13,color:'#3D3D3D'}}>Customer ID</Text>
    <Text style={{fontWeight:'bold',fontSize:12, color:'#B8B8B8',top:2}}>39475-384</Text>
    </View>
    <View style={{ flexDirection:'row', gap:132, left:12,top:15}}> 
    <Text style={{fontWeight:'bold',fontSize:13,color:'#3D3D3D'}}>Address</Text>
    <Text style={{fontWeight:'bold',fontSize:12, color:'#B8B8B8',top:2}}>Kigali,Rwanda</Text>
    </View>
    <View style={{ flexDirection:'row', gap:150, left:12,top:35}}> 
    <Text style={{fontWeight:'bold',fontSize:13,color:'#3D3D3D'}}>Payment Cycle</Text>
    <Text style={{fontWeight:'bold',fontSize:12, color:'#B8B8B8',top:2}}>May</Text>
    </View>
    <View style={{ flexDirection:'row', gap:110, left:12,top:40}}> 
    <Text style={{fontWeight:'bold',fontSize:13,color:'#3D3D3D'}}>Electricity Amount</Text>
    <Text style={{fontWeight:'bold',fontSize:12, color:'#B8B8B8',top:2}}>$300.00</Text>
    </View>
    <View style={{ flexDirection:'row', gap:205, left:12,top:40}}> 
    <Text style={{fontWeight:'bold',fontSize:13,color:'#3D3D3D'}}>Tax</Text>
    <Text style={{fontWeight:'bold',fontSize:12, color:'#B8B8B8',top:2}}>$30.00</Text>
    </View>
    <View style={{ flexDirection:'row', gap:140, left:12,top:40}}> 
    <Text style={{fontWeight:'bold',fontSize:13,color:'#3D3D3D'}}>Transaction fee</Text>
    <Text style={{fontWeight:'bold',fontSize:12, color:'#B8B8B8',top:2}}>Free</Text>
    </View>
    <View style={{ flexDirection:'row', gap:180, left:12,top:50}}> 
    <Text style={{fontWeight:'bold',fontSize:13, color:'#3D3D3D'}}>TOTAL:</Text>
    <Text style={{fontWeight:'bold',fontSize:12, color:'black',top:2,}}>$330.00</Text>
    </View>
   
 </View>
</View>
  </View>
    </ScrollView>
    <View style={{paddingHorizontal:30, justifyContent:'flex-end', top:20}}>
  <Button  title="Confirm Payment"
            backgroundColor="#3C3CA7"
            color="#ffffff"
            borderColor="#3C3CA7"
            borderWidth={2}
            />
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

    width:400,
    height:85,

    flexDirection:'row',
    paddingHorizontal:40,
    gap:20,
    justifyContent:'left',
    alignItems:'center'
    
  },
  container2:{
   
    backgroundColor: '#E1EBEE',

    width:400,
    height:620,


    paddingHorizontal:40,
    gap:20,
    justifyContent:'left',
  
  },
  logo:{
    width:35,
    height:35,
    top:2,
  },
  icon:{
    color:'white',
    top:7,
  },
 
  maintext:{
    color:'white',
    fontSize:15,
    fontWeight:'bold',
    top:7,

  },
 
  text1:{
    fontWeight:'bold',
    fontSize:15,
    top:10,
  },
  cardd:{
    padding:13,
    backgroundColor:'white',
    width:320,
    height:410,
    borderRadius:10,
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
    height:65,
    borderRadius:10,
    top:2,
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
