import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function Deal() {
  return (
    <View style={{backgroundColor:'#E6EAED',height:800}}>
        {/* <View style={{height:10}}></View> */}
        <View  style={{display:'flex',flexDirection:'row',gap:290,backgroundColor:'#4647AF',padding:40,paddingBottom:70}}>
            
        <Text style={{color:'#ECECFF'}}>Deals</Text>
        <Ionicons name='notifications-outline' size={20} color={'#ECECFF'}/>
        </View>
        <ScrollView horizontal style={{backgroundColor:''}}>
    <View style={{display:'flex'}}> 
        <FontAwesome6 name='border-all' />
      <Text>All</Text>
      </View> 
      <View>
        <Ionicons name='fast-food-outline'/>
        <Text>Food</Text>
      </View>
      <View>
        <FontAwesome name='file-movie-o'/>
        <Text>movie</Text>
      </View>
      <View>
        < Ionicons name='water'/>
        <Text>water</Text>
      </View>
      <View>
        <FontAwesome name='gamepad'/>
        <Text>game</Text>
      </View>

        </ScrollView>
    </View>
  )
}