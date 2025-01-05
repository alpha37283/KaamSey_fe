import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image} from 'react-native';
import text from '../styles/textStyles';
import colors from '../styles/colors/colors';


const {width, height } = Dimensions.get('window');
export default function OrderCard({ name, description, price, status, onPress }) {

  return (
    <TouchableOpacity style={[styles.card, {alignItems : 'center', justifyContent : 'flex-start', width : width * 0.94, borderRadius: 10, padding: width * 0.03, marginVertical: height * 0.1, marginHorizontal: width * 0.03,}]} onPress={onPress}>
      <View style={{alignItems : 'center', justifyContent : 'center', width : width * 0.2, height: height * 0.11,}}>
        <Image source={require('../../assets/icons/google.png')} style={{width : width * 0.1, height: height * 0.05}} />
      </View>
      <View style={{marginLeft : width * 0.01, width : width * 0.65}}>
          <View>
            <Text style={text.mediumBold}>{name}</Text>
            <Text style={[text.small, {marginTop : height * 0.005}]}>{description}</Text>
          </View>
          <View style={[{flexDirection: 'row', justifyContent: 'space-between', marginTop: height * 0.02, }]}>
            <Text style={[text.smallBold,{color : colors.primary, fontSize : height * 0.02, letterSpacing : 0}]}>{price}</Text>
            <Text style={[text.small, {color : '#999'}]}>{status}</Text>
          </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection : 'row',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginTop : height * 0.03
  },
});
