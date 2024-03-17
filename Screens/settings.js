import { Image, ScrollView, StyleSheet, Text, View,Button, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function Settings() {
    return (
        <View>
            <View style={{display:'flex',flexDirection:'row',backgroundColor:'#4647AF',padding:40,paddingBottom:70}}>
            < MaterialIcons name='arrow-back-ios' size={20} color={'#ECECFF'} />
            <Text style={{color:'#ECECFF',fontWeight:'bold',fontSize:25}}>settings</Text>
   </View>
        </View>
    )
}