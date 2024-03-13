import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StandardTextInput from './Components/StandardTextInput';

import Login from './Screens/Login';
import Pagination1 from './Screens/Pagination1';
import Pagination2 from './Screens/Pagination2';
import Pagination3 from './Screens/Pagination3';
import Landing from './Screens/Landing';
import Register from './Screens/Register';
import Slider from './Components/Slider'
import Payment from './Screens/Payment';
import SendMoney from './Screens/SendMoney';
import Received from './Screens/Received';

import Deal from './Screens/deals';


export default function App() {

  return (
    <View style={styles.container}>

      <Login/>
      {/* <Pagination1/> */}
      {/* <Pagination2/> */}
      {/* <Pagination3/> */}
      {/* <Landing/> */}
      {/* <Payment/> */}
      {/* <SendMoney/> */}
      <Received/>
      {/* <Register/> */}
      {/* <Slider/> */}

      {/* <Payment/> */}
     <Deal/>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {

   

    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
