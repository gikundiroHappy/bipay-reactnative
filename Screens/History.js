import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View,Dimensions, ScrollView } from 'react-native';
import { TextInput } from "react-native-paper";
import HistoryData from '../Components/History';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function History() {

    const data = [
        {
            id:1,
            icon:'lightning-bolt',
            title:"Electricity",
            date:'2 jun 2020',
            amount:-340.00,
            color:"#FCC058"
        },
        {
            id:2,
            icon:'plus-circle',
            title:"Top Up",
            date:'2 jun 2020',
            amount:-340.00,
            color:"#302F8D"
        },
        {
            id:3,
            icon:'wifi',
            title:"Internet",
            date:'1 jun 2020',
            amount:-340.00,
            color:"#A5CA98"
        },
        {
            id:4,
            icon:'controller-classic',
            title:"Games",
            date:'1 jun 2020',
            amount:-340.00,
            color:"#FFA646"
        },
        {
            id:5,
            icon:'movie',
            title:"Movie",
            date:'29 Mei 2020',
            amount:-340.00,
            color:"#7975DE"
        },
        {
            id:6,
            icon:'plus-circle',
            title:"Top Up",
            date:'28 Mei 2020',
            amount:500.00,
            color:"#302F8D"
        }
    ]

  return (    
      <ScrollView>
      <View style={styles.container}>
      <StatusBar style="auto"/>
      <View style={{backgroundColor:"#4647AF",height:80,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center", paddingHorizontal:20,}}>
        <Text style={{fontWeight:"bold",fontSize:20,color:"white",}}>History</Text>
        <TextInput icon='magnify' 
        style={{backgroundColor:"#4647AF",width:"65%",fontSize:14,}}
        textColor='white'
        underlineColor='#4647AF' 
        theme={{
            colors:{primary:"#6C7A89",height}
        }}
        right={<TextInput.Icon size={29} icon="magnify" color="white"></TextInput.Icon>}
        />
      </View>
      {data.map((datas,index)=>(
            <View key={index} style={{paddingTop:23,marginRight:10 }}>
            <HistoryData  title={datas.title} date={datas.date} amount={datas.amount} icon={datas.icon} color={datas.color}/>
            </View>
      )
       )}
      </View>
      
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width:width,
    backgroundColor:"#E9EDF0",
    height:height,
  },
});
