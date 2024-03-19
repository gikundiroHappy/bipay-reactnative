import { Image, ScrollView, StyleSheet, Text, View,Button, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Topup({navigation}) {
    return (
        <View style={{backgroundColor:'#E9EDF0',height:'100%',position:''}}>
             <View style={{display:'flex',flexDirection:'row',alignItems:'center',backgroundColor:'#3737A4',padding:35,gap:10}}>
                  <TouchableOpacity onPress={() =>
        navigation.navigate('profile')
        }>
            < MaterialIcons name='arrow-back-ios' size={20} color={'#ECECFF'} style={{textAlign:'center'}} />
            </TouchableOpacity>
            <Text style={{color:'#ECECFF',fontWeight:'bold',fontSize:23}}>Top Up</Text>
            </View>
            <View style={{backgroundColor:'#FFFFFF',position:'absolute',top:60,padding:30,width:'90%',height:'20%',margin:20,borderRadius:8,}}>
                <Text style={{fontWeight:'bold',padding:8}}>Balance</Text>
                <View style={{borderWidth:2,borderColor:'#EEECF6', borderRadius:5,width:'100%',height:'50%',display:'flex',flexDirection:'row',alignItems:'center',gap:5}}>
                    <MaterialIcons name='account-balance-wallet' color={'#8686D7'} size={25} style={{marginLeft:5}}/>
                    <Text style={{fontWeight:'bold'}}>$ 23.OOOO</Text>
                </View>
              
            </View>
        <View style={{top:160}}>
        <Text style={{fontWeight:'bold',padding:20,fontSize:20}}>Amount</Text>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',height:'20%',gap:20}}>
        <View style={{borderWidth:2,borderColor:'#DFE3E6', borderRadius:20,width:'25%',display:'flex',flexDirection:'row',alignItems:'center',gap:5}}>
                    <Text style={{padding:10}}>$50.OO</Text>
                </View>
                <View style={{borderWidth:2,borderColor:'#DFE3E6', borderRadius:20,width:'25%',display:'flex',flexDirection:'row',alignItems:'center',gap:5,backgroundColor:'White'}}>
                    <Text style={{padding:10}}>$100.OO</Text>
                </View>
                <View style={{borderWidth:2,borderColor:'#DFE3E6', borderRadius:20,width:'25%',display:'flex',flexDirection:'row',alignItems:'center',gap:5}}>
                    <Text style={{padding:10}}>$500.OO</Text>
                </View>
                </View>
        </View>
        </View>
    )
}