
import { Text, View,Dimensions, } from 'react-native';
import { Icon } from 'react-native-elements'

export default function HistoryData({icon,title,date,amount,color}) {

    return (

<View style={{paddingHorizontal:20,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>

      <View style={{display:"flex",flexDirection:"row",alignItems:"center", gap:15}}>
        <View style={{backgroundColor:"#FFFFFF",borderRadius:10,width:60,paddingVertical:13,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <Icon name={icon} type='material-community' iconStyle={{fontSize:30}} color={color}/>
        </View>

        <View>
            <Text style={{fontWeight:"bold",fontSize:16,color:"#686A6C"}}>{title}</Text>
            <Text style={{fontWeight:'bold',fontSize:14,color:"#CECFD9",padding:5}}>{date}</Text>
        </View>
       </View>

        <View>
            <Text style={{fontWeight:"bold",fontSize:14,color:"#585C60"}}>${amount}</Text>
        </View>
     
      </View>

)}