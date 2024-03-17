import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Dimensions, ScrollView,Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import BipayHome from '../Components/Bihome';
import Card from '../Components/card'
import Button from '../Components/Button'
import PrommoDetails from '../Components/Promodetails';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Bihome() {
 
  const data = [
    {
        id:1,
        icon:'data-matrix-scan',
        title:"scan",
    },
    {
        id:2,
        icon:'plus-circle-outline',
        title:"Top Up",
    },
    {
        id:3,
        icon:'send-outline',
        title:"Send",
    },
    {
        id:4,
        icon:'call-received',
        title:"Receive",
    },
]

const datas = [
  {
      id:1,
      icon:'lightning-bolt',
      title:"Electricity",
      color:"#FCC058",
      backgroundColor:"#FEF8EF"
  },
  {
    id:2,
    icon:'wifi',
    title:"Internet",
    color:"#A5CA98",
    backgroundColor:"#F0F7EB"
  },
  {
      id:3,
      icon:'water',
      title:"water",
      color:"#49B2DF",
      backgroundColor:"#F4FCFF"
  },
  {
      id:4,
      icon:'sofa',
      title:"Hotel",
      color:"#CC4247",
      backgroundColor:"#FFF5F6"
  },
  {
      id:5,
      icon:'blender',
      title:"Order Food",
      color:"#A86557",
      backgroundColor:"#FFF8F6",
  },
  {
    id:6,
    icon:'movie',
    title:"Movies",
    color:"#7975DE",
    backgroundColor:"#F5F4FC"
  },
  {
    id:7,
    icon:'controller-classic',
    title:"Games",
    color:"#FBB14D",
    backgroundColor:"#FFF6EC"
},
{
    id:8,
    icon:'border-all',
    title:"More",
    color:"#76748D",
    backgroundColor:"#FCFBFF"
}
]

const promo =[
  {
      id:1,
      image:'https://images.pexels.com/photos/5872348/pexels-photo-5872348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description:"valid until",
      discount:"30%",
      name:"Groam39",

  },
  {
      id:2,
      image:'https://images.pexels.com/photos/5650016/pexels-photo-5650016.jpeg?auto=compress&cs=tinysrgb&w=600',
      description:"valid until",
      discount:"30%",
      name:"Groam39",

  },
  {
      id:3,
      image:'https://images.pexels.com/photos/5632364/pexels-photo-5632364.jpeg?auto=compress&cs=tinysrgb&w=600',
      description:"valid until",
      discount:"30%",
      discount:"Groam39",  
  },
  {
      id:4,
      image:'https://images.pexels.com/photos/4202924/pexels-photo-4202924.jpeg?auto=compress&cs=tinysrgb&w=600',
      description:"valid until",
      discount:"30%",
      name:"Groam39",  
  },
  {
      id:5,
      image:'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=600',
      description:"valid until",
      discount:"30%",
      name:"Groam39", 
  }
]

  return (
      <View style={styles.container}>
      <StatusBar style="auto"/>
      <View style={{backgroundColor:"#4647AF",height:250,paddingVertical:30,paddingHorizontal:20}}>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <View>
            <Text style={{color:'white'}}>Balance</Text>
            <View style={{display:"flex",flexDirection:"row",gap:5,alignItems:"center"}}>
            <Image source={require('../assets/ballogo.png')} style={{height:20,width:20}}/>
            <Text style={{fontWeight:"bold",paddingVertical:8,color:"white",fontSize:18}}>$23.000</Text>
            </View>
        </View>
        <View>
        <Ionicons
              name="notifications-outline"
              size={25}
              color='white'
            />
        </View>
        </View>

        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:20}}>
        {data.map((datas,index)=>(
            <View key={index}>
            <BipayHome  title={datas.title} date={datas.date}  icon={datas.icon}/>
            </View>
      )
       )}
        </View>
      </View>

      <View style={{position:"absolute",display:"flex",top:200,right:0,left:0,display:"flex",flexDirection:"row",justifyContent:"center"}}>
      <View style={{backgroundColor:"white",borderRadius:10,width:350,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",padding:20,flexWrap:"wrap"}}>
      {datas.map((item,index)=>(
            <View key={index} style={{width:"23%",marginHorizontal:2}}>
            <Card  title={item.title} date={item.date}  icon={item.icon} color={item.color} backgroundColor={item.backgroundColor}/>
            </View>
      )
       )}
      </View>
      </View>

      <View style={{height:200}}></View>

      <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between", alignItems:"center", paddingHorizontal:30}}>
        <View>
          <Text style={{color:'#8D9192',fontWeight:"bold",fontSize:16}}>Check new Promo</Text>
          <Text style={{color:"#D0D2D6",fontSize:15,paddingVertical:5}}>Easy with promo code</Text>
        </View>

        <Button title="VIEW ALL" borderWidth={1} borderColor="#4647AF" color='#4647AF'/>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator style={{paddingTop:20}}>
      {promo.map((item,index)=>(
            <View key={index} style={{marginHorizontal:10}}>
            <PrommoDetails  image={item.image}/>
            </View>
      )
       )}
      </ScrollView>

      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    width:width,
    backgroundColor:"#E9EDF0",
    position:"relative",
    height:height,
  },
});
