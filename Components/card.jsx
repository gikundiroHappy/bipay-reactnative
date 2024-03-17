

import { Text, View,Dimensions, } from 'react-native';
import { Icon } from 'react-native-elements'

export default function Card({icon,title,color,backgroundColor}) {

    return (

     <View >
        <View backgroundColor={backgroundColor} style={{borderRadius:10,width:60,paddingVertical:13}}>
        <Icon name={icon} type='material-community' iconStyle={{fontSize:30}} color={color}/>
        </View>
        <Text style={{paddingVertical:10,textAlign:"center", fontSize:12}} >{title}</Text>

     </View>

)}