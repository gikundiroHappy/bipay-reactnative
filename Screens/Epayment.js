
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft , faSearch,faChevronRight,faBolt} from '@fortawesome/free-solid-svg-icons';
function Epayment() {
  return (
  
    <View style={styles.maincontainer}>
    <View style={styles.container}>
      <FontAwesomeIcon icon={faChevronLeft} style={styles.icon} size={15} />
      <Text style={styles.maintext}>Electricity Payment</Text>
      <FontAwesomeIcon icon={faSearch} style={styles.iconn} size={15} />
    </View>
    <View style={{ alignSelf:'center', top:40}}>
    <View style={styles.card}>
   <View style={{backgroundColor:'red', width:40, borderRadius:30}}>
   <FontAwesomeIcon icon={faSearch}  style={styles.iconn} size={15}/>
   </View>
    <View style={styles.textbalance}> 
    <Text style={{fontWeight:'bold',fontSize:15,color:'#3D3D3D'}}>Balance</Text>
    <Text style={{fontWeight:'bold',fontSize:10, color:'#B8B8B8'}}>$324.999</Text>
 
    </View>
 
    <FontAwesomeIcon icon={faChevronRight} style={{color:'#B8B8B8', left:150,top:12, }} size={13} />
    </View>
    </View>
  
    </View> 

  
   
  )
}
const styles = StyleSheet.create({
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
          width: 20,
          height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
          
  },
  maintext:{
    color:'white',
    fontSize:15,
    fontWeight:'bold',

  },
  logo:{
    width:35,
    height:35,
    top:2,
  },
  icon:{
    color:'white',
 
  },
  iconn:{
    color:'white',
    left:100,
  },
  maincontainer: {
    flex: 1,
    flexDirection:'column',

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
})
export default Epayment