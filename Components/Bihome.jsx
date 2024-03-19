import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function BipayHome({ icon, title }) {
  const navigation = useNavigation();

  const handleIconPress = () => {
    switch (icon) {
        case 'data-matrix-scan':
            // navigation.navigate('scan');
            break;
          case 'plus-circle-outline':
            navigation.navigate('top');
            break;
          case 'send-outline':
            navigation.navigate('sendmoney');
            break;
          case 'call-received':
            navigation.navigate('receive');
            break;
          default:
            console.log("wrong")
            break;
    }
  };

  return (
    <TouchableOpacity onPress={handleIconPress}>
      <View>
        <Icon name={icon} type='material-community' iconStyle={{ fontSize: 25 }} color="white" />
        <Text style={{ color: "white", paddingVertical: 10 }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
