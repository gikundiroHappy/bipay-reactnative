
import React from 'react';
import { StyleSheet, Text, View ,Image, Dimensions} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell, faChevronLeft ,faChevronRight} from '@fortawesome/free-solid-svg-icons';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
function SendMoney() {
  return (
    <View style={styles.maincontainer}>
    <View style={styles.container}>
    <FontAwesomeIcon icon={faChevronLeft} style={styles.icon} size={10} />
     <Text style={styles.maintext}>Send Money</Text>
    </View>
    <View style={styles.container2}>
    <View style={styles.card}>
    <Image source={require('../assets/phone.png')} style={styles.logo} />
    <View style={styles.textbalance}> 
 
 <Text style={{fontWeight:'bold',fontSize:15,top:22}}>Transfer to bipay</Text>
    </View>
 
    <FontAwesomeIcon icon={faChevronRight} style={{color:'#B8B8B8', left:70,top:28 }} size={13} />
    </View>
    <View style={styles.card}>
    <Image source={require('../assets/house.png')} style={styles.logo} />
    <View style={styles.textbalance}> 
 
 <Text style={{fontWeight:'bold',fontSize:15,top:22}}>Transfer to bank</Text>
    </View>
 
    <FontAwesomeIcon icon={faChevronRight} style={{color:'#B8B8B8', left:70,top:28 }} size={13} />
    </View>
    <View>
      <Text style={{fontSize:20, fontWeight:'bold', top:70}}>Transaction History</Text>
    </View>
    <View >
    <View style={{flexDirection:'row', top:60, gap:20}}>
    <Image source={require('../assets/light.png')} style={{}} /> 
    <View>
    <Text style={{fontSize:15, fontWeight:'bold',}}>Electricity</Text>
    <Text style={{fontSize:10, fontWeight:'bold', top:2,color:'#B8B8B8'}}>2 Jun 2023</Text>
    </View>
<Text style={{ccolor:'black', left:120,top:6 ,fontWeight:'bold'}}  >$-3444</Text>
    </View>



    <View style={{flexDirection:'row', top:100, gap:20}}>
    <Image source={require('../assets/plus.png')} style={{}} /> 
    <View>
    <Text style={{fontSize:15, fontWeight:'bold',}}>Top Up</Text>
    <Text style={{fontSize:10, fontWeight:'bold', top:2,color:'#B8B8B8'}}>10 Sept 2020</Text>
    </View>
<Text style={{color:'black', left:130,top:6,fontWeight:'bold' }}  >$-2344</Text>
    </View>


    <View style={{flexDirection:'row', top:135, gap:20}}>
    <Image source={require('../assets/wifi.png')} style={{}} /> 
    <View>
    <Text style={{fontSize:15, fontWeight:'bold',}}>Internet</Text>
    <Text style={{fontSize:10, fontWeight:'bold', top:2,color:'#B8B8B8'}}>2 May 2023</Text>
    </View>
<Text style={{color:'black', left:136,top:6 , fontWeight:'bold'}}  >$-3544</Text>
    </View>



    </View>
    </View>
  
    </View>
  )
}
 const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        flexDirection:'column',
      },
      textbalance:{
       
      },
      container: {
        backgroundColor: '#3C3CA7',
        height:100,
        flexDirection:'row',
        paddingHorizontal:40,
        gap:20,
        justifyContent:'left',
        alignItems:'center',
     
       
        
      },
      container2:{
       
        backgroundColor: '#E1EBEE',
        height:690,
        paddingHorizontal:40,
        gap:20,
        justifyContent:'left',
      
      },
      logo:{
        width:40,
        height:40,
        top:12,
        left:10,
      },
      icon:{
        color:'white',
        top:6,
      },
      maintext:{
        color:'white',
        fontSize:17,
        fontWeight:'bold',
        top:6,
    
      },
      card:{
        backgroundColor:'white',
        width:320,
        height:70,
        borderRadius:10,
        top:40,
        shadowColor: '#000',
        flexDirection:'row',
        gap:30,
        shadowOffset: {
              width: 10,
              height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
              
      },
 })
export default SendMoney