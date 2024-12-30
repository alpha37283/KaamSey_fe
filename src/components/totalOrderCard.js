import React from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import colors from '../styles/colors/colors';

import text from '../styles/textStyles';

const TotalOrder = ({totalOrders}) => {

    const {width, height} = useWindowDimensions();

     const [fontsLoaded] = useFonts({
            'PEB': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
        });
        if (!fontsLoaded) {
            return null;
        }

    
  return (
    <View style={{padding : 18, position : 'relative'}}>
      <LinearGradient colors={[colors.primary, colors.secondary]}  start={{x: 0, y: 1}} end={{x: 1, y: 0}} style={styles.gradientCard}
      />
      <View style={styles.whiteCard}>
        <View style={{zIndex: 1, flexDirection : 'row'}}>
          <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center'}}>  
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../assets/icons/logoTotalOrders.png')} style={{width : width * 0.25,  height : height * 0.09}}/>
            </View>
          </View>
          <View style={{flex : 1, alignItems : 'center',justifyContent : 'space-evenly'}}>
               <Text style={[text.small,{fontSize: 14, color: '#666',letterSpacing : 1}]}>Total Orders</Text>
               <Text style={[text.smallExtraBold,{fontSize : 30 ,marginBottom: 1,}]}>{totalOrders}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gradientCard: {
    position: 'absolute',
    left: 24,
    right: 8,
    top: 24,
    bottom: 8,
    borderRadius: 16,
    transform: [{scale: 0.98}],
    borderWidth : 1,
    borderColor : 'black',
  },
  whiteCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth : 1,
    borderColor : 'black',
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },


});

export default TotalOrder;