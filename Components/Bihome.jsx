
import { Text, View,Dimensions, } from 'react-native';
import { Icon } from 'react-native-elements'

export default function BipayHome({icon,title}) {

    return (

<View >

        <Icon name={icon} type='material-community' iconStyle={{fontSize:25}} color="white"/>
        <Text style={{color:"white",paddingVertical:10}} >{title}</Text>

</View>

)}