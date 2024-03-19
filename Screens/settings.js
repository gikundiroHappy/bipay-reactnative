import { Image, ScrollView, StyleSheet, Text, View,Button, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Setco from '../Components/sett';
export default function Settings({navigation}) {
    const sets=[
        {
            icon:<Ionicons name='notifications' size={25} color={'#8784EE'}/>,
            name:'Notifications',
            icons:< FontAwesome name='toggle-on'  size={25} color={'#303093'}/>,
        },
        {
            icon:<MaterialCommunityIcons name='horse-variant-fast'  size={25} color={'#8784EE'}/>,
            name:'Fast payment',
            icons:< FontAwesome name='toggle-off'  size={25} color={'#CCCAE2'}/>,
        },
        {
            icon:<MaterialCommunityIcons name='fingerprint'  size={25} color={'#8784EE'}/>,
            name:'fingerprint',
            icons:< MaterialIcons name='keyboard-arrow-right'  size={25} color={'#CCCAE2'}/>,
        },
        {
            icon:<Fontisto name='language'  size={25} color={'#8784EE'}/>,
            name:'Language',
            icons:<MaterialIcons name='keyboard-arrow-right'  size={25} color={'#CCCAE2'}/>,
        },
    ]
    return (
        <View style={{backgroundColor:'#E9EDF0',height:'100%'}}>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center',backgroundColor:'#3737A4',padding:35,gap:10}}>
                <TouchableOpacity onPress={() =>
              navigation.navigate('profile')}>
            < MaterialIcons name='arrow-back-ios' size={20} color={'#ECECFF'} style={{textAlign:'center'}}/>
            </TouchableOpacity>
            <Text style={{color:'#ECECFF',fontWeight:'bold',fontSize:23}}>settings</Text>
   </View>
   {/* <View> */}
   <View style={{display:'flex',flexDirection:'column',justifyContent:'',padding:20,marginTop:10}}>
        {sets.map((item,index) =>{
        return(
            <View key={index} style={{marginTop:3,justifyContent:'space-evenly'}}>
                <Setco icon={item.icon} name={item.name} icons={item.icons}/>
                
            </View>
        )
})}
   </View>
        </View>
    )
}