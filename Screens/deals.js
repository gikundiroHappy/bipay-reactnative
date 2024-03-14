import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Pics from "./prodcomponents/pics";

export default function Deal() {
    const data =[
        {
            image:'https://images.pexels.com/photos/5872348/pexels-photo-5872348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            description:"valid until",
            date:"20-jan-2023",
            name:"Groam39",

        },
        {
            image:'https://images.pexels.com/photos/5650016/pexels-photo-5650016.jpeg?auto=compress&cs=tinysrgb&w=600',
            description:"valid until",
            date:"20-jan-2023",
            name:"Groam39",

        },
        {
            image:'https://images.pexels.com/photos/5632364/pexels-photo-5632364.jpeg?auto=compress&cs=tinysrgb&w=600',
            description:"valid until",
            date:"20-jan-2023",
            name:"Groam39",  
        },
        {
            image:'https://images.pexels.com/photos/4202924/pexels-photo-4202924.jpeg?auto=compress&cs=tinysrgb&w=600',
            description:"valid until",
            date:"20-jan-2023",
            name:"Groam39",  
        },
        {
            image:'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=600',
            description:"valid until",
            date:"20-jan-2023",
            name:"Groam39", 
        }
    ]
  return (
    <View style={{backgroundColor:'#E6EAED',position:'relative',height:"100%"}}>
        <View style={{position:''}}>
        <View  style={{display:'flex',flexDirection:'row',justifyContent:'space-between',backgroundColor:'#4647AF',padding:40,paddingBottom:70}}>
            
        <Text style={{color:'#ECECFF',fontWeight:'bold',fontSize:25}}>Deals</Text>
        <Ionicons name='notifications-outline' size={20} color={'#ECECFF'}/>
        </View>
        <ScrollView horizontal style={{backgroundColor:'#FFFFFF',position:'absolute',top:80,padding:30,width:'90%',margin:20,borderRadius:8}}>
    <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}> 
    <View style={{display:'flex',backgroundColor:'#F7F7F7',width:40,height:40,marginRight:20,justifyContent:'center',alignItems:'center'}}>
    <FontAwesome6 name='border-all'/>
    </View>
        
      <Text style={{fontWeight:'bold'}}>All</Text>
      </View> 
      <View>
      <View style={{display:'flex',backgroundColor:'#F7F7F7',width:40,height:40,marginRight:20,justifyContent:'center',alignItems:'center'}}>
        <Ionicons name='fast-food-outline'  />
        </View>
        <Text style={{fontWeight:'bold'}}>Food</Text>
      </View>
      <View>
      <View style={{display:'flex',backgroundColor:'#F7F7F7',width:40,height:40,marginRight:20,justifyContent:'center',alignItems:'center'}}>
        <FontAwesome name='file-movie-o'  />
         </View>
        <Text style={{fontWeight:'bold'}}>movie</Text>
      </View>
      <View>
      <View style={{display:'flex',backgroundColor:'#F7F7F7',width:40,height:40,marginRight:20,justifyContent:'center',alignItems:'center'}}>
        < Ionicons name='water'  />
        </View>
        <Text style={{fontWeight:'bold'}}>water</Text>
      </View>
      <View>
      <View style={{display:'flex',backgroundColor:'#F7F7F7',width:40,height:40,marginRight:20,justifyContent:'center',alignItems:'center'}}>
        <FontAwesome name='gamepad' />
        </View>
        <Text style={{fontWeight:'bold'}}>game</Text>
      </View>

        </ScrollView>
        </View>
        <View style={{height:90}}></View>
        <View>
        <ScrollView  showsHorizontalScrollIndicator={false} >
            <View style={{display:'flex',flexDirection:'column',justifyContent:''}}>
        {data.map((item,index) =>{
        return(
            <View key={index} style={{marginTop:0,marginRight:10,justifyContent:'space-evenly'}}>
                <Pics image={item.image} description={item.description} date={item.date} name={item.name}/>
                
            </View>
        )
})}</View>
    </ScrollView>
    </View>
    </View>
  )
}