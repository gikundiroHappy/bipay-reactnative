import { Image, ScrollView, StyleSheet, Text, View,Button, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Set from '../Components/prof';
export default function Profile() {
    const files =[
        {
            icon:< FontAwesome name='user' size={20} color={'#8F8FEB'}/>,
            name:'change profile',

        },
        {
            icon:< AntDesign name='creditcard' size={20} color={'#8F8FEB'}/>,
            name:'My card',
        },
        {
            icon:<AntDesign name='codesquareo' size={20} color={'#8F8FEB'}/>,
            name:'promo Code',
        },
        {
            icon:<MaterialCommunityIcons name='shield-lock' size={20}  color={'#8F8FEB'}/>,
            name:'Change security Code',
        },
        {
            icon:< AntDesign name='setting' size={20} color={'#8F8FEB'}/>,
            name:'settings',
        },
        {
            icon:<Ionicons name='document-text-outline' size={20} color={'#8F8FEB'} />,
            name:'Terms of services',
        },
        
        
    ]
    return (
        // <View>
        <View style={{backgroundColor:'#E6EAED',position:'relative',height:"100%"}}>
   <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',backgroundColor:'#4647AF',padding:40,paddingBottom:70}}>
   <Text style={{color:'#ECECFF',fontWeight:'bold',fontSize:25}}>Profile</Text>
   < MaterialIcons name='notifications-none'size={20} color={'#ECECFF'} />
    </View>
    <View style={{backgroundColor:'#FFFFFF',position:'absolute',top:60,padding:30,width:'90%',height:'32%',margin:20,borderRadius:8,}}>
        <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Image source={require('../assets/profile.webp')} style={{width:'35%',height:'60%',borderRadius:10}}></Image>
        <Text style={{fontWeight:'bold'}}>Jonathan Doe</Text>
        <Text style={{color:'#B8B8B8'}}>0912-339-3493</Text>
        </View>
        <View style={{borderBottomColor:'#E3E3E3',borderBottomWidth:1,marginVertical:10}}></View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
           <View style={{borderWidth:1,borderColor:'#E3E3E3',padding:10, borderRadius:7,width:'45%',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <MaterialCommunityIcons name='data-matrix-scan'/>
       <Text style={{fontSize:13,fontWeight:'bold'}}> QR Code</Text>
       </View>  
       <View style={{borderWidth:1,borderColor:'#E3E3E3',padding:10, borderRadius:7,width:'45%',flexDirection:'row',alignItems:'center',justifyContent:'center',gap:5}}>
            <AntDesign name='barcode'/>
       <Text style={{fontSize:13,fontWeight:'bold'}}>Barcode</Text>
       </View>        
        </View>

    </View>
    <View style={{height:130}}></View>
    <View style={{display:'flex',flexDirection:'column',justifyContent:'',padding:28,marginTop:30}}>
        {files.map((item,index) =>{
        return(
            <View key={index} style={{marginTop:3,justifyContent:'space-evenly'}}>
                <Set icon={item.icon} name={item.name}/>
                
            </View>
        )
})}</View>
<TouchableOpacity style={{backgroundColor:'#FD3C6D',padding:10,marginRight:20,marginLeft:20,borderRadius:7}}>
    <Text style={{textAlign:'center',color:'#FFD6E6'}}>Sign Out</Text>
</TouchableOpacity>
    </View>

// </View>
    )
}
