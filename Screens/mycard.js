import { Image, ScrollView, StyleSheet, Text, View,Button, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Cards({navigation}) {
    return (
        <View  style={{backgroundColor:'#E9EDF0',height:'100%'}}>
                  <View style={{display:'flex',flexDirection:'row',alignItems:'center',backgroundColor:'#3737A4',padding:35,gap:10}}>
                  <TouchableOpacity onPress={() =>
        navigation.navigate('profile')
        }>
            < MaterialIcons name='arrow-back-ios' size={20} color={'#ECECFF'} style={{textAlign:'center'}} />
            </TouchableOpacity>
            <Text style={{color:'#ECECFF',fontWeight:'bold',fontSize:23}}>My Cards</Text>
            </View>
            <View style={{height:25}}></View>
            <View  style={{display:'flex',flexDirection:'column',gap:30,marginLeft:15,marginRight:15}}>
            <Image source={require('../assets/visa-gold.jpg')} style={{width:'100%',height:'35%',borderRadius:20}}></Image>
            <Image source={require('../assets/visa blue.jpeg')} style={{width:'100%',height:'35%',borderRadius:20}}></Image>
            </View>
            {/* <View>
            <View style={{borderWidth:2,borderColor:'#E3E3E3', borderRadius:7,width:'100%',height:''}}>
<Text>HEY</Text>
            </View>
            </View> */}
        </View>
    )
}